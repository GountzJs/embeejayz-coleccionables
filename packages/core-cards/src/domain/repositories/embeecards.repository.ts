import type {
	GetEmbeeCardsRequest,
	GetEmbeeCardsResponse,
} from "../interfaces/get-embeecard.interfaces";

export interface EmbeeCardsRepository {
	getPagination({
		id,
		page,
	}: GetEmbeeCardsRequest): Promise<GetEmbeeCardsResponse>;
}
