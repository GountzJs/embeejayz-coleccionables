import type { TotalRankingEntity } from "./total-ranking.entity";

export type RankingEntity = {
	id: string;
	username: string;
	total: TotalRankingEntity;
};
