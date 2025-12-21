import type { RankingEntity } from "../../domain/entities/ranking.entity";
import type { AccountsRepository } from "../../domain/repositories/accounts.repository";

type GetAllRankingResponse = () => Promise<RankingEntity[]>;

export function getAllRanking(
	apiRankingRepository: AccountsRepository,
): GetAllRankingResponse {
	return () => apiRankingRepository.getAll();
}
