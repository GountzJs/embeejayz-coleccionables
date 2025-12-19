import { getEmbeeCardPagination } from "./application/use-cases/get-embeecard-pagination";
import { fetchEmbeeCardsImplRepository } from "./infraestructure/fetch-embeecards-impl.repository";

export const GetEmbeecardsPagination = getEmbeeCardPagination(
	fetchEmbeeCardsImplRepository,
);
