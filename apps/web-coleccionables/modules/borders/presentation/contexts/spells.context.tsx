import { spells, type TSpell } from "@embeejayz/core-borders";
import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import {
	ChangeLeftSpell,
	ChangeRightSpell,
	GetSpells,
} from "../../DependencyInjection";

export interface SpellsContextType {
	leftIcon?: TSpell;
	rightIcon?: TSpell;
	changeLeftIcon: (icon: TSpell) => void;
	changeRightIcon: (icon: TSpell) => void;
}

const SpellsContext = createContext<SpellsContextType>({
	leftIcon: undefined,
	rightIcon: undefined,
	changeLeftIcon: () => {},
	changeRightIcon: () => {},
});

export const useSpellsContext = () => {
	return useContext(SpellsContext);
};

interface Props {
	children: React.ReactNode;
}

export function SpellsContextProvider({ children }: Props) {
	const [leftIcon, setLeftIcon] = useState<TSpell>(spells.flash);
	const [rightIcon, setRightIcon] = useState<TSpell>(spells.ignite);

	useEffect(() => {
		GetSpells().then(({ left, right }) => {
			if (left) setLeftIcon(left as TSpell);
			if (right) setRightIcon(right as TSpell);
		});
	}, []);

	const changeLeftIcon = (icon: TSpell) => {
		setLeftIcon(icon);
		ChangeLeftSpell(icon);
	};

	const changeRightIcon = (icon: TSpell) => {
		setRightIcon(icon);
		ChangeRightSpell(icon);
	};

	return (
		<SpellsContext.Provider
			value={{ leftIcon, rightIcon, changeLeftIcon, changeRightIcon }}
		>
			{children}
		</SpellsContext.Provider>
	);
}
