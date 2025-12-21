import type { TSpell } from "../consts/spells.const";
import type { GetSpellsResponse } from "../interfaces/get-spells.interface";

export interface SpellsRepository {
	getSpells(): Promise<GetSpellsResponse>;
	changeLeftSpell(spell: TSpell): Promise<void>;
	changeRightSpell(spell: TSpell): Promise<void>;
}
