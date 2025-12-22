import type { UserTwitchEntity } from "../../domain/entities/user-twitch.entity";
import type { AccountsRepository } from "../../domain/repositories/accounts.repository";

interface GetUserTwitchCommand {
	id: string;
}

type GetUserTwitchResponse = (
	command: GetUserTwitchCommand,
) => Promise<UserTwitchEntity>;

export function getUserTwitch(
	accountsRepository: AccountsRepository,
): GetUserTwitchResponse {
	return ({ id }: GetUserTwitchCommand) => {
		return accountsRepository.getUserTwitch(id);
	};
}
