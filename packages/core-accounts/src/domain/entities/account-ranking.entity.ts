import type { TRank } from "../consts/rank.consts";
import type { RankingEntity } from "./ranking.entity";

export type AccountRankingEntity = RankingEntity & {
	rank: TRank;
};
