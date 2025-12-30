import type { TEmbeecardCategory } from "@embeejayz/core-cards";

export type LatestEmbeecardEntity = {
	isSpecial: boolean;
	quantity: number;
	name: string;
	description: string;
	identity: string;
	cover: string;
	category: TEmbeecardCategory;
};
