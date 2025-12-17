import type { RankingEntity } from "@modules/accounts/domain/entities/ranking.entity";
import type { ApiRankingRepository } from "@modules/accounts/domain/repositories/api-ranking.repository";

export async function getAllRanking(
	apiRankingRepository: ApiRankingRepository,
): Promise<RankingEntity[]> {
	return apiRankingRepository.getAll();
}
