import { spells, type TSpell } from "../domain/consts/spells.const";
import type { GetSpellsResponse } from "../domain/interfaces/get-spells.interface";
import type { SpellsRepository } from "../domain/repositories/spells.repository";

export class LocalStorageSpells implements SpellsRepository {
	async getSpells(): Promise<GetSpellsResponse> {
		const leftIcon: TSpell = (localStorage.getItem("left-icon") ||
			spells.flash) as TSpell;
		const rightIcon: TSpell = (localStorage.getItem("right-icon") ||
			spells.ignite) as TSpell;

		return { left: leftIcon, right: rightIcon };
	}

	async changeLeftSpell(spell: TSpell): Promise<void> {
		localStorage.setItem("left-icon", spell);
		return Promise.resolve();
	}

	async changeRightSpell(spell: TSpell): Promise<void> {
		localStorage.setItem("right-icon", spell);
		return Promise.resolve();
	}
}
