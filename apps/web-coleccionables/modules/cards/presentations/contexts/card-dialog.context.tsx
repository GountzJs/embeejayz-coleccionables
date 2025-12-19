import type { EmbeecardEntity } from "@modules/cards/domain/entities/embeecard.entity";
import type React from "react";
import { createContext, useContext, useState } from "react";

export interface CardDialogContextType {
	card: EmbeecardEntity | null;
	open: boolean;
	openDialog: (card: EmbeecardEntity) => void;
	closeDialog: () => void;
}

const CardDialogContext = createContext<CardDialogContextType>({
	card: null,
	open: false,
	openDialog: () => {},
	closeDialog: () => {},
});

export const useCardDialogContext = () => {
	return useContext(CardDialogContext);
};

interface Props {
	children: React.ReactNode[];
}

export function CardDialogProvider({ children }: Props) {
	const [open, setOpen] = useState(false);
	const [card, setCard] = useState<EmbeecardEntity | null>(null);

	const openDialog = (card: EmbeecardEntity) => {
		setCard(card);
		setOpen(true);
	};

	const closeDialog = () => {
		setCard(null);
		setOpen(false);
	};

	return (
		<CardDialogContext.Provider value={{ card, open, openDialog, closeDialog }}>
			{children}
		</CardDialogContext.Provider>
	);
}
