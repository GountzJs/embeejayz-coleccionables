import type { EmbeecardEntity } from "@embeejayz/core-cards";
import type { GetLatestRequest } from "../interfaces/latest-request.interface";

export interface EmbeecardRepository {
	getLatest({ size, id }: GetLatestRequest): Promise<EmbeecardEntity[]>;
}
