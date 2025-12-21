import { apiUrl } from "@/core/settings";
import { getAllRanking } from "./application/use-cases/get-all-ranking";
import { getProfile } from "./application/use-cases/get-profile";
import { FetchAccountsImplRepository } from "./infraestructure/fetch-accounts-impl.repository";

const fetchAccountsImplRepository = new FetchAccountsImplRepository(apiUrl);

export const GetAllRanking = getAllRanking(fetchAccountsImplRepository);

export const GetProfile = getProfile(fetchAccountsImplRepository);
