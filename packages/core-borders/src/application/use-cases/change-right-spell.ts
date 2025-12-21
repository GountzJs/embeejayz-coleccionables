import type { TSpell } from "../../domain/consts/spells.const";
import type { SpellsRepository } from "../../domain/repositories/spells.repository";

export function changeRightSpell(spellsRepository: SpellsRepository) {
	return (spell: TSpell) => spellsRepository.changeRightSpell(spell);
}
