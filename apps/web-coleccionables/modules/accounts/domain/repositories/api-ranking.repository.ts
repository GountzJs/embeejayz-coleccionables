import type { RankingEntity } from "../entities/ranking.entity";

export interface ApiRankingRepository {
	getAll(): Promise<RankingEntity[]>;
}
