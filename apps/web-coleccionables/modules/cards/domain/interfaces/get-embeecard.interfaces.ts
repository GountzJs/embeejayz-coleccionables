import type { EmbeecardEntity } from "../entities/embeecard.entity";

export interface GetEmbeeCardsRequest {
	id: string;
	page?: number;
}

export interface GetEmbeeCardsResponse {
	page: number;
	total: {
		pages: number;
		items: number;
	};
	data: EmbeecardEntity[];
}
