import type { Worlds2025Repository } from "@embeejayz/core-albums";

export class FetchWorlds2025ImplRepository implements Worlds2025Repository {
	constructor(private readonly apiUrl: string) {}
	async getStickers(id: string): Promise<string[]> {
		const res = await fetch(`${this.apiUrl}/worlds2025/users/${id}/stickers`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});

		const { data } = await res.json();

		if (!res.ok) throw new Error(data.message || "Failed to fetch stickers");

		return data;
	}
}
