import type { UserTwitchEntity } from "@embeejayz/core-accounts";
import type { EmbeecardEntity } from "@embeejayz/core-cards";

export type EmbeecardPackEntity = {
	id: string;
	user: UserTwitchEntity;
	cards: EmbeecardEntity[];
};
