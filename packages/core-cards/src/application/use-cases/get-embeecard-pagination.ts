import type {
	GetEmbeeCardsRequest,
	GetEmbeeCardsResponse,
} from "../../domain/interfaces/get-embeecard.interfaces";
import type { EmbeeCardsRepository } from "../../domain/repositories/embeecards.repository";

type GetEmbeeCardPagination = (
	request: GetEmbeeCardsRequest,
) => Promise<GetEmbeeCardsResponse>;

export function getEmbeeCardPagination(
	embeecardRepository: EmbeeCardsRepository,
): GetEmbeeCardPagination {
	return ({ id, page }: GetEmbeeCardsRequest) => {
		return embeecardRepository.getPagination({ id, page });
	};
}
