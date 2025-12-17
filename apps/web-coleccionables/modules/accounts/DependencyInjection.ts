import { getAllRanking } from "./application/use-cases/get-all-ranking";
import { getProfile } from "./application/use-cases/get-profile";
import { apiAccountsImplRepository } from "./infraestructure/api-accounts.repository";

export const GetAllRanking = getAllRanking(apiAccountsImplRepository);

export const GetProfile = getProfile(apiAccountsImplRepository);
