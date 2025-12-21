import type { ProfileEntity } from "../../domain/entities/profile.entity";
import type { AccountsRepository } from "../../domain/repositories/accounts.repository";

interface GetProfileCommand {
	username: string;
}

type GetProfileResponse = (
	command: GetProfileCommand,
) => Promise<ProfileEntity>;

export function getProfile(
	apiAccountsRepository: AccountsRepository,
): GetProfileResponse {
	return ({ username }: GetProfileCommand) => {
		return apiAccountsRepository.getProfile(username);
	};
}
