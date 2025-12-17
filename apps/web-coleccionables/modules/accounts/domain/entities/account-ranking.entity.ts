import type { TRank } from "../consts/rank.enum";
import type { RankingEntity } from "./ranking.entity";

export type AccountRankingEntity = RankingEntity & {
	rank: TRank;
};
