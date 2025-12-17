import type { TSpell } from "../../domain/consts/spells.const";
import type { SpellsRepository } from "../../domain/repositories/spells.repository";

export function changeLeftSpell(spellsRepository: SpellsRepository) {
	return (spell: TSpell) => spellsRepository.changeLeftSpell(spell);
}
