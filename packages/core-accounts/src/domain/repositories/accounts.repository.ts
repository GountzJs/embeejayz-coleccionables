import type { ProfileEntity } from "../entities/profile.entity";
import type { RankingEntity } from "../entities/ranking.entity";
import type { UserTwitchEntity } from "../entities/user-twitch.entity";

export interface AccountsRepository {
	getAll(): Promise<RankingEntity[]>;
	getProfile(username: string): Promise<ProfileEntity>;
	getUserTwitch(id: string): Promise<UserTwitchEntity>;
}
