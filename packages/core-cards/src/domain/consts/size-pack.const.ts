export const sizePackEmbeecard = {
	bigPack: "BIGPACK",
	mediumPack: "MEDIUMPACK",
	smallPack: "SMALLPACK",
	individual: "INDIVIDUAL",
} as const;

export type TSizePackEmbeecard =
	(typeof sizePackEmbeecard)[keyof typeof sizePackEmbeecard];
