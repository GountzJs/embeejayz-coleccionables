import type { ProfileEntity } from "../../domain/entities/profile.entity";
import type { ApiAccountsRepository } from "../../domain/repositories/api-accounts.repository";

interface GetProfileCommand {
	username: string;
}

export function getProfile(
	apiAccountsRepository: ApiAccountsRepository,
): (command: GetProfileCommand) => Promise<ProfileEntity> {
	return ({ username }: GetProfileCommand) => {
		return apiAccountsRepository.getProfile(username);
	};
}
