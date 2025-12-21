import type { SpellsRepository } from "../../domain/repositories/spells.repository";

export function getSpells(spellsRepository: SpellsRepository) {
	return () => spellsRepository.getSpells();
}
