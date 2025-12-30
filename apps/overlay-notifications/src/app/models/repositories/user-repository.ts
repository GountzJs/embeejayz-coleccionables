import type { UserTwitchEntity } from "@embeejayz/core-accounts";

export interface UserRepository {
	getUserTwitch(username: string): Promise<UserTwitchEntity>;
}
