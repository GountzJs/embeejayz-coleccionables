import type {
	BordersRepository,
	GetPaginationBordersRequest,
	GetPaginationBordersResponse,
} from "@embeejayz/core-borders";

export class FetchBordersImplRepository implements BordersRepository {
	constructor(private readonly apiUrl: string) {}

	async getPagination({
		id,
		page,
		orderBy,
		sort,
		name,
	}: GetPaginationBordersRequest): Promise<GetPaginationBordersResponse> {
		const searchParams = new URLSearchParams();

		if (page) searchParams.set("page", page.toString());
		if (orderBy) searchParams.set("orderBy", orderBy.toString());
		if (sort) searchParams.set("sort", sort.toString());
		if (name) searchParams.set("name", name);

		const res = await fetch(
			`${this.apiUrl}/borders/users/${id}?${searchParams.toString()}`,
			{
				headers: {
					"Content-Type": "application/json",
				},
			},
		);

		const data = await res.json();

		if (!res.ok) throw data;

		return data;
	}
}
