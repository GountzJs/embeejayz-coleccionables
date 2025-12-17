import { apiUrl } from "@/core/settings";
import type { RankingEntity } from "../domain/entities/ranking.entity";

export const ApiRankingImplRepository = {
	async getAll(): Promise<RankingEntity[]> {
		const response = await fetch(`${apiUrl}/accounts/ranking`);
		const data = await response.json();
		if (!response.ok) {
			throw data;
		}
		return data.data;
	},
};
