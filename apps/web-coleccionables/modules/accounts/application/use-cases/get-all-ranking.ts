import type { RankingEntity } from "../../domain/entities/ranking.entity";
import type { ApiAccountsRepository } from "../../domain/repositories/api-accounts.repository";

export function getAllRanking(
	apiRankingRepository: ApiAccountsRepository,
): () => Promise<RankingEntity[]> {
	return () => apiRankingRepository.getAll();
}
