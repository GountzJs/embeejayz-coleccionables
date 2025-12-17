import { spells, type TSpell } from "../domain/consts/spells.const";
import type { GetSpellsResponse } from "../domain/interfaces/get-spells.interface";
import type { SpellsRepository } from "../domain/repositories/spells.repository";

export const localStorageSpells: SpellsRepository = {
	getSpells: async (): Promise<GetSpellsResponse> => {
		const leftIcon: TSpell = (localStorage.getItem("left-icon") ||
			spells.flash) as TSpell;
		const rightIcon: TSpell = (localStorage.getItem("right-icon") ||
			spells.ignite) as TSpell;

		return { left: leftIcon, right: rightIcon };
	},
	changeLeftSpell: async (spell: TSpell): Promise<void> => {
		localStorage.setItem("left-icon", spell);
		return Promise.resolve();
	},
	changeRightSpell: async (spell: TSpell): Promise<void> => {
		localStorage.setItem("right-icon", spell);
		return Promise.resolve();
	},
};
