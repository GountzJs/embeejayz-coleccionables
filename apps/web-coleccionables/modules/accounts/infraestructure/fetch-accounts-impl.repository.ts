import {
	type AccountsRepository,
	type ProfileEntity,
	type RankingEntity,
	rank,
} from "@embeejayz/core-accounts";

export class FetchAccountsImplRepository implements AccountsRepository {
	constructor(private readonly apiUrl: string) {}
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
			throw data;
		}

		return { rank: rank.unranked, ...data };
	}
}
