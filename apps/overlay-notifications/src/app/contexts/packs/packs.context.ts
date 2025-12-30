// biome-ignore assist/source/organizeImports: <Autosave import>
import type { EmbeecardPackEntity } from "@/app/models/entities/embeecard-pack.entity";
import type { TSizePackEmbeecard } from "@embeejayz/core-cards";
import { createContext, useContext } from "react";

interface PacksContextProps {
	packSelected: EmbeecardPackEntity | null;
	packs: EmbeecardPackEntity[];
	isPreview: boolean;
	addPack: (sizePack: TSizePackEmbeecard, username: string) => void;
	removePack: (id: string) => void;
	selectPack: (id: string) => void;
	removePackSelected: () => void;
	togglePreview: () => void;
}

export const PacksContext = createContext<PacksContextProps>({
	isPreview: true,
	packSelected: null,
	packs: [],
	addPack: () => {},
	removePack: () => {},
	selectPack: () => {},
	removePackSelected: () => {},
	togglePreview: () => {},
});

export const usePacksContext = () => useContext(PacksContext);
