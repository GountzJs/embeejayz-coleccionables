import type { TSizePackEmbeecard } from "@embeejayz/core-cards";
import { createContext, useContext } from "react";
import type { Card } from "../../models/types/card.type";

interface Props {
	sizePack: TSizePackEmbeecard | null;
	cards: Card[];
	addPack: (size: TSizePackEmbeecard) => void;
	removePack: () => void;
}

export const PackContext = createContext<Props>({
	cards: [],
	sizePack: null,
	addPack: () => {},
	removePack: () => {},
});

export const usePack = () => useContext(PackContext);
