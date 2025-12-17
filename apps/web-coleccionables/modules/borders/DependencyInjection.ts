import { changeLeftSpell } from "./application/use-cases/change-left-spell";
import { changeRightSpell } from "./application/use-cases/change-right-spell";
import { getBordersPagination } from "./application/use-cases/get-borders-pagination";
import { getSpells } from "./application/use-cases/get-spells";
import { fetchBordersImplRepository } from "./infraestructure/fetch-borders.repository";
import { localStorageSpells } from "./infraestructure/localstorage-spells";

export const ChangeLeftSpell = changeLeftSpell(localStorageSpells);

export const ChangeRightSpell = changeRightSpell(localStorageSpells);

export const GetSpells = getSpells(localStorageSpells);

export const GetBordersPagination = getBordersPagination(
	fetchBordersImplRepository,
);
