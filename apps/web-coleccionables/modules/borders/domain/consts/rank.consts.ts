export const borderRank = {
	unranked: "UNRANKED",
	bronze: "BRONZE",
	silver: "SILVER",
	gold: "GOLD",
	platinum: "PLATINUM",
	diamond: "DIAMOND",
	master: "MASTER",
	challenger: "CHALLENGER",
} as const;

export type TBorderRank = keyof typeof borderRank;
