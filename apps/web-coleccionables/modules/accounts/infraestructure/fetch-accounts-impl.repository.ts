// biome-ignore assist/source/organizeImports: <Autosave import>
import {
	rank,
	type AccountsRepository,
	type ProfileEntity,
	type RankingEntity,
	type UserTwitchEntity,
} from "@embeejayz/core-accounts";

export class FetchAccountsImplRepository implements AccountsRepository {
	constructor(private readonly apiUrl: string) {}

	getUserTwitch(): Promise<UserTwitchEntity> {
		throw new Error("Method not implemented.");
	}
	async getAll(): Promise<RankingEntity[]> {
		const response = await fetch(`${this.apiUrl}/accounts/ranking`);
		const data = await response.json();
		if (!response.ok) {
			throw data;
		}
		return data.data;
	}

	async getProfile(username: string): Promise<ProfileEntity> {
		const response = await fetch(`${this.apiUrl}/accounts/${username}`, {
			headers: {
				"Content-Type": "application/json",
			},
		});
		const { data } = await response.json();

		if (!response.ok) {
			throw new Error(
				data.message || `Failed to fetch profile: ${response.status}`,
			);
		}

		return { rank: rank.unranked, ...data };
	}
}
