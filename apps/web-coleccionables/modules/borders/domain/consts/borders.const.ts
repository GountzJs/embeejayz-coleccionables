export const BordersOrderBy = {
	rank: "rank",
	createdAt: "createdAt",
} as const;

export type TBordersOrderBy = keyof typeof BordersOrderBy;

export const BorderSort = {
	asc: "ASC",
	desc: "DESC",
} as const;

export type TBorderSort = keyof typeof BorderSort;
