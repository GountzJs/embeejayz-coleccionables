import { apiUrl } from "@/core/settings";
import type {
	GetEmbeeCardsRequest,
	GetEmbeeCardsResponse,
} from "../domain/interfaces/get-embeecard.interfaces";
import type { EmbeeCardsRepository } from "../domain/repositories/embeecards.repository";

export const fetchEmbeeCardsImplRepository: EmbeeCardsRepository = {
	getPagination: async ({
		id,
		page,
	}: GetEmbeeCardsRequest): Promise<GetEmbeeCardsResponse> => {
		const searchParams = new URLSearchParams();
		if (page) searchParams.set("page", page.toString());

		const response = await fetch(
			`${apiUrl}/embeecards/users/${id}?${searchParams.toString()}`,
			{
				headers: {
					"Content-Type": "application/json",
				},
			},
		);

		const data = await response.json();

		if (!response.ok) {
			throw data;
		}
		return data;
	},
};
