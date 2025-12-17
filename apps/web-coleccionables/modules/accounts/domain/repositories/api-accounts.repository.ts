import type { ProfileEntity } from "../entities/profile.entity";
import type { RankingEntity } from "../entities/ranking.entity";

export interface ApiAccountsRepository {
	getAll(): Promise<RankingEntity[]>;
	getProfile(username: string): Promise<ProfileEntity>;
}
