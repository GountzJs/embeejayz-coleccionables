import type { ProfileEntity } from "../../domain/entities/profile.entity";
import type { ApiAccountsRepository } from "../../domain/repositories/api-accounts.repository";

interface GetProfileCommand {
	username: string;
}

type GetProfileResponse = (
	command: GetProfileCommand,
) => Promise<ProfileEntity>;

export function getProfile(
	apiAccountsRepository: ApiAccountsRepository,
): GetProfileResponse {
	return ({ username }: GetProfileCommand) => {
		return apiAccountsRepository.getProfile(username);
	};
}
