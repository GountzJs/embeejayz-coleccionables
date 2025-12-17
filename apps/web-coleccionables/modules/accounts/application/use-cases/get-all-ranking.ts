import type { RankingEntity } from "../../domain/entities/ranking.entity";
import type { ApiAccountsRepository } from "../../domain/repositories/api-accounts.repository";

type GetAllRankingResponse = () => Promise<RankingEntity[]>;

export function getAllRanking(
	apiRankingRepository: ApiAccountsRepository,
): GetAllRankingResponse {
	return () => apiRankingRepository.getAll();
}
