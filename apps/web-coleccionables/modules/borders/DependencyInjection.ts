// biome-ignore assist/source/organizeImports: <Auto save import>
import { apiUrl } from "@/core/settings";
import {
	changeLeftSpell,
	changeRightSpell,
	getBordersPagination,
	getSpells,
} from "@embeejayz/core-borders";
import { FetchBordersImplRepository } from "./infraestructure/fetch-borders.repository";
import { LocalStorageSpells } from "./infraestructure/localstorage-spells";

const localStorageSpells = new LocalStorageSpells();

const fetchBordersImplRepository = new FetchBordersImplRepository(apiUrl);

export const ChangeLeftSpell = changeLeftSpell(localStorageSpells);

export const ChangeRightSpell = changeRightSpell(localStorageSpells);

export const GetSpells = getSpells(localStorageSpells);

export const GetBordersPagination = getBordersPagination(
	fetchBordersImplRepository,
);
