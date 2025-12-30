// biome-ignore assist/source/organizeImports: <Autosave import>
import { HeimerdingerIcon } from "@/app/components/icons/heimerdinger";
import { Snackbar } from "@/app/components/snackbar/snackbar";
import type { EmbeecardPackEntity } from "@/app/models/entities/embeecard-pack.entity";
import { embeecardsFetchImplRepository } from "@/app/services/embeecards.service";
import { userFetchImplRepository } from "@/app/services/user.service";
import type { TSizePackEmbeecard } from "@embeejayz/core-cards";
import type React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { v4 } from "uuid";
import { PacksContext } from "./packs.context";

interface Props {
	children: React.ReactNode;
}

const FetchPack = async (
	size: TSizePackEmbeecard,
	username: string,
): Promise<EmbeecardPackEntity> => {
	try {
		const user = await userFetchImplRepository.getUserTwitch(username);
		const embeecards = await embeecardsFetchImplRepository.getLatest({
			size,
			id: user.id,
		});
		return { id: v4(), user, cards: embeecards };
	} catch (err) {
		throw new Error(`Failed show cards: ${(err as Error).message}`);
	}
};

const INITIAL_VALUE = true;

export function PacksProvider({ children }: Props) {
	const [isPreview, setIsPreview] = useState<boolean>(INITIAL_VALUE);
	const [packSelected, setPackSelected] = useState<EmbeecardPackEntity | null>(
		null,
	);
	const [packs, setPacks] = useState<EmbeecardPackEntity[]>([]);

	const addPack = (size: TSizePackEmbeecard, username: string) => {
		FetchPack(size, username)
			.then((pack) => setPacks((prev) => [...prev, pack]))
			.catch(() => {
				toast.custom(() => (
					<Snackbar
						message={`No pudimos mostrar el paquete de cartas de: @${username}.`}
					>
						<HeimerdingerIcon />
					</Snackbar>
				));
			});
	};

	const removePack = (id: string) => {
		setPacks((prev) => prev.filter((p) => p.id !== id));
	};

	const selectPack = (id: string) => {
		const pack = packs.find((p) => p.id === id);
		if (pack) {
			setPackSelected(pack);
		}
	};

	const removePackSelected = () => {
		setPackSelected(null);
	};

	const togglePreview = () => {
		setIsPreview(!isPreview);
	};

	return (
		<PacksContext.Provider
			value={{
				isPreview,
				packs,
				packSelected,
				addPack,
				removePack,
				selectPack,
				removePackSelected,
				togglePreview,
			}}
		>
			{children}
		</PacksContext.Provider>
	);
}
