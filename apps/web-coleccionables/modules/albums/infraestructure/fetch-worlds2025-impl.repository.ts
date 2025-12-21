import { apiUrl } from "@/core/settings";

export const fetchWorlds2025ImplRepository = {
	getStickers: async (id: string): Promise<string[]> => {
		const res = await fetch(`${apiUrl}/worlds2025/users/${id}/stickers`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});

		const { data } = await res.json();

		if (!res.ok) throw new Error(data.message || "Failed to fetch stickers");

		return data;
	},
};
