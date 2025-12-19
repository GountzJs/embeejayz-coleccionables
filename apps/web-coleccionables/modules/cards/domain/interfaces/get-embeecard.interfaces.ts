import type { EmbeecardEntity } from "../entities/embeecard.entity";
import type { TotalEmbeecardEntity } from "../entities/total-embeecard.entity";

export interface GetEmbeeCardsRequest {
	id: string;
	page?: number;
}

export interface GetEmbeeCardsResponse {
	page: number;
	total: TotalEmbeecardEntity;
	data: EmbeecardEntity[];
}
