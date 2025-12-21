import type {
	EmbeeCardsRepository,
	GetEmbeeCardsRequest,
	GetEmbeeCardsResponse,
} from "@embeejayz/core-cards";

export class FetchEmbeecardsImplRepository implements EmbeeCardsRepository {
	constructor(private readonly apiUrl: string) {}

	async getPagination({
		id,
		page,
	}: GetEmbeeCardsRequest): Promise<GetEmbeeCardsResponse> {
		const searchParams = new URLSearchParams();
		if (page) searchParams.set("page", page.toString());

		const response = await fetch(
			`${this.apiUrl}/embeecards/users/${id}?${searchParams.toString()}`,
			{
				headers: {
					"Content-Type": "application/json",
				},
			},
		);

		const data = await response.json();

		if (!response.ok)
			throw new Error(data.message || "Failed to fetch embeecards");

		return data;
	}
}
