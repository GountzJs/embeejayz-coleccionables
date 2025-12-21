// biome-ignore assist/source/organizeImports: <Autosave import>
import { apiUrl } from "@/core/settings";
import { getEmbeeCardPagination } from "@embeejayz/core-cards";
import { FetchEmbeecardsImplRepository } from "./infraestructure/fetch-embeecards-impl.repository";

const fetchEmbeecardsImplRepository = new FetchEmbeecardsImplRepository(apiUrl);

export const GetEmbeecardsPagination = getEmbeeCardPagination(
	fetchEmbeecardsImplRepository,
);
