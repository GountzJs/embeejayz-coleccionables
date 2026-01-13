// biome-ignore assist/source/organizeImports: Autosave import
import data from "@/assets/data/embeecards.json";
import {
	sizePackEmbeecard,
	type TSizePackEmbeecard,
} from "@embeejayz/core-cards";
import type React from "react";
import { useState } from "react";
import type { Card } from "../../models/types/card.type";
import { PackContext } from "./pack.context";

interface Props {
	children: React.ReactNode;
}

const shuffleArray = <T,>(array: T[]): T[] => {
	const shuffled = array.slice();
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
};

export function PackProvider({ children }: Props) {
	const [sizePack, setSizePack] = useState<TSizePackEmbeecard | null>(null);
	const [cards, setCards] = useState<Card[]>([]);

	const addPack = (size: TSizePackEmbeecard) => {
		setSizePack(size);
		const randomCards = shuffleArray(data.cards as []);
		switch (size) {
			case sizePackEmbeecard.individual:
				setCards(randomCards.slice(0, 2));
				break;
			case sizePackEmbeecard.smallPack:
				setCards(randomCards.slice(0, 3));
				break;
			case sizePackEmbeecard.mediumPack:
				setCards(randomCards.slice(0, 6));
				break;
			default:
				setCards(randomCards.slice(0, 12));
				break;
		}
	};

	const removePack = () => {
		setSizePack(null);
		setCards([]);
	};

	return (
		<PackContext.Provider value={{ sizePack, cards, addPack, removePack }}>
			{children}
		</PackContext.Provider>
	);
}
