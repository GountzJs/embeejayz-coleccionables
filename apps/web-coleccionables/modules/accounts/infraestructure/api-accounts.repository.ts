import { apiUrl } from "@/core/settings";
import { Rank } from "../domain/consts/rank.enum";
import type { ProfileEntity } from "../domain/entities/profile.entity";
import type { RankingEntity } from "../domain/entities/ranking.entity";
import type { ApiAccountsRepository } from "../domain/repositories/api-accounts.repository";

export const apiAccountsImplRepository: ApiAccountsRepository = {
	async getAll(): Promise<RankingEntity[]> {
		const response = await fetch(`${apiUrl}/accounts/ranking`);
		const data = await response.json();
		if (!response.ok) {
			throw data;
		}
		return data.data;
	},
	getProfile: async (username: string): Promise<ProfileEntity> => {
		const response = await fetch(`${apiUrl}/accounts/${username}`, {
			headers: {
				"Content-Type": "application/json",
			},
		});
		const { data } = await response.json();

		if (!response.ok) {
			throw data;
		}

		return { rank: Rank.Unranked, ...data };
	},
};
