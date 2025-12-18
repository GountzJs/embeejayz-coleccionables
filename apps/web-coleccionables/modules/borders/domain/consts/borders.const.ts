export const bordersOrderBy = {
	rank: "rank",
	createdAt: "createdAt",
} as const;

export type TBordersOrderBy = keyof typeof bordersOrderBy;

export const borderSort = {
	asc: "ASC",
	desc: "DESC",
} as const;

export type TBorderSort = keyof typeof borderSort;
