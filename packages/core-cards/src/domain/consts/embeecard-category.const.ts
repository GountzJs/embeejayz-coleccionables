export const embeecardCategory = {
	t1: "T1",
	lolesports: "LOLESPORTS",
	embee: "EMBEEJAYZ",
	troll: "TROLL",
	special: "SPECIAL",
} as const;

export type TEmbeecardCategory =
	(typeof embeecardCategory)[keyof typeof embeecardCategory];
