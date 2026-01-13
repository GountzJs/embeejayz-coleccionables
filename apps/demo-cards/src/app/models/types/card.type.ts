import type { TEmbeecardCategory } from "@embeejayz/core-cards";

export type Card = {
	name: string;
	description: string;
	identify: string;
	cover: string;
	category: TEmbeecardCategory;
};
