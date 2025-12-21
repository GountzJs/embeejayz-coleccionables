export const rank = {
	unranked: "UNRANKED",
	bronze: "BRONZE",
	silver: "SILVER",
	gold: "GOLD",
	platinum: "PLATINUM",
	diamond: "DIAMOND",
	master: "MASTER",
	challenger: "CHALLENGER",
} as const;

export type TRank = (typeof rank)[keyof typeof rank];
