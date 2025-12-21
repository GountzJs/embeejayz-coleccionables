import type { TEmbeecardCategory } from "../consts/embeecard-category.const";

export interface EmbeecardEntity {
	quantity: number;
	name: string;
	description: string;
	identify: string;
	cover: string;
	category: TEmbeecardCategory;
}
