import type { TRank } from "../consts/rank.consts";

export type ProfileEntity = {
	id: string;
	avatar: string;
	username: string;
	team: string | null;
	rank: TRank;
	total: {
		borders: number;
		cards: number;
		general: number;
	};
};
