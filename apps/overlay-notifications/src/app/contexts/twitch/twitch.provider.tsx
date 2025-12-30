// biome-ignore assist/source/organizeImports: <Autosave import>
import { twitchImplRepository } from "@/app/services/twitch.service";
import { useEffect, useState } from "react";
import { TwitchContext } from "./twitch.context";

type Props = {
	children: React.ReactNode;
};

export function TwitchProvider({ children }: Props) {
	const [isConnected, setIsConnected] = useState<boolean>(false);

	useEffect(() => {
		const connectTwitch = async () => {
			await twitchImplRepository.connect();
			setIsConnected(true);
		};

		if (!isConnected) {
			connectTwitch().catch(() => setIsConnected(false));
		}

		return () => {
			if (isConnected) {
				twitchImplRepository.removeAllListeners();
				twitchImplRepository.disconnect().finally(() => setIsConnected(false));
			}
		};
	}, [isConnected]);

	return (
		<TwitchContext.Provider value={{ isConnected }}>
			{children}
		</TwitchContext.Provider>
	);
}
