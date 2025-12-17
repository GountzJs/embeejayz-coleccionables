export const Rank = {
	Unranked: "UNRANKED",
	Bronze: "BRONZE",
	Silver: "SILVER",
	Gold: "GOLD",
	Platinum: "PLATINUM",
	Diamond: "DIAMOND",
	Master: "MASTER",
	Challenger: "CHALLENGER",
};

export type TRank = (typeof Rank)[keyof typeof Rank];
