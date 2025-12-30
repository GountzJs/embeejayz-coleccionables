// biome-ignore assist/source/organizeImports: <Autosave import>
import { apiUrl } from "@/consts/settings";
import type { EmbeecardEntity } from "@embeejayz/core-cards";
import type { LatestEmbeecardEntity } from "../models/entities/latest-embeecard.entity";
import type { GetLatestRequest } from "../models/interfaces/latest-request.interface";
import { EmbeecardMapper } from "../models/mappers/embeecard.mapper";
import type { EmbeecardRepository } from "../models/repositories/embeecard-repository";

const embeecardMapper = new EmbeecardMapper();

export const embeecardsFetchImplRepository: EmbeecardRepository = {
	getLatest: async ({
		size,
		id,
	}: GetLatestRequest): Promise<EmbeecardEntity[]> => {
		const queryParams = new URLSearchParams({
			sizePack: size,
		});

		const response = await fetch(
			`${apiUrl}/embeecards/${id}/last?${queryParams.toString()}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			},
		);

		const data = await response.json();

		if (!response.ok) throw new Error(data.message);

		const cards = data.data as LatestEmbeecardEntity[];

		return cards.map((card) => embeecardMapper.mapFrom(card));
	},
};
