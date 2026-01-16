import type { TSizePackEmbeecard } from "@embeejayz/core-cards";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import styled from "styled-components";
import type { ChatUserstate } from "tmi.js";
import { usePacksContext } from "../contexts/packs/packs.context";
import { useTwitchContext } from "../contexts/twitch/twitch.context";
import { notificationSwap } from "../models/consts/notification-swap.const";
import { typeNotification } from "../models/consts/type-notification.const";
import { twitchImplRepository } from "../services/twitch.service";
import { formatNotification } from "../utils/notifications";
import { BorderIcon } from "./icons/borders";
import { HeimerdingerIcon } from "./icons/heimerdinger";
import { Snackbar } from "./snackbar/snackbar";

interface Props {
	children: React.ReactNode;
}

const Container = styled.div`
	position: relative;
	display: flex;
	height: 100%;
	width: 100%;
`;

export function HandlerTwitchMessages({ children }: Props) {
	const { isConnected } = useTwitchContext();
	const { addPack, togglePreview } = usePacksContext();

	useEffect(() => {
		if (isConnected) {
			twitchImplRepository.on(
				(channel: string, tags: ChatUserstate, message: string) => {
					const isMod = tags.mod;
					const isCreator = channel.replace("#", "") === tags.username;
					const isBot = tags.username === "gountzbot";

					const isPreview = message === "!toggle-packs";

					if ((isMod || isCreator) && isPreview) {
						togglePreview();
						return;
					}

					if (!isBot) return;

					const isNotification = message.startsWith("!notification ");
					const isMessage = message.startsWith("!message ");

					if (isMessage) {
						const [_, msg] = message.replace("!message", "").trim().split("-");

						toast.custom(() => (
							<Snackbar message={msg}>
								<HeimerdingerIcon />
							</Snackbar>
						));

						return;
					}

					if (isNotification) {
						const notificationText = message.slice("!notification ".length);
						const notificationFields = notificationText.split("-");

						const { swap, isSpecial, quantity, username } = formatNotification(
							typeNotification.notification,
							notificationFields,
						);

						if (isSpecial && swap === notificationSwap.border) {
							toast.custom(() => (
								<Snackbar
									message={`@${username} Ha canjeado el borde del enfrentamiento.`}
								>
									<HeimerdingerIcon />
								</Snackbar>
							));
							return;
						}

						if (isSpecial && swap === notificationSwap.card) {
							toast.custom(() => (
								<Snackbar message={`@${username} Ha canjeado la carta única.`}>
									<HeimerdingerIcon />
								</Snackbar>
							));
							return;
						}

						if (swap === notificationSwap.border) {
							const newMsg =
								Number(quantity) > 1
									? `@${username} canjeó ${quantity} bordes aleatorios.`
									: `@${username} canjeó un borde aleatorio.`;

							toast.custom(() => (
								<Snackbar message={newMsg}>
									<BorderIcon />
								</Snackbar>
							));
							return;
						}

						if (swap === notificationSwap.card) {
							const sizePack = quantity as TSizePackEmbeecard;
							addPack(sizePack, username);
						}

						return;
					}
				},
			);
		}

		return () => twitchImplRepository.removeAllListeners();
	}, [isConnected, addPack, togglePreview]);

	return (
		<Container>
			{children}
			<Toaster position="bottom-right" />
		</Container>
	);
}
