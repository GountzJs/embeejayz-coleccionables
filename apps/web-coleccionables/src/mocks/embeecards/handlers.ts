import type { EmbeecardEntity } from "@modules/cards/domain/entities/embeecard.entity";
import type { TotalEmbeecardEntity } from "@modules/cards/domain/entities/total-embeecard.entity";
import { HttpResponse, http } from "msw";
import { embeecards } from "./data";

export const handlers = [
	http.get(
		"http://localhost:4200/api/embeecards/users/:username",
		({ request }) => {
			const url = new URL(request.url);
			const page = Number(url.searchParams.get("page") || 1);
			return HttpResponse.json(getEmbeecards(page));
		},
	),
];

type GetEmbeecardsResponse = {
	data: EmbeecardEntity[];
	total: TotalEmbeecardEntity;
	page: number;
};

function getEmbeecards(page: number): GetEmbeecardsResponse {
	const filteredData = embeecards;
	const limit = 10;

	const paginatedData = filteredData.slice((page - 1) * limit, page * limit);

	return {
		data: paginatedData,
		total: {
			items: filteredData.length,
			pages: Math.ceil(filteredData.length / limit),
		},
		page: page,
	};
}
