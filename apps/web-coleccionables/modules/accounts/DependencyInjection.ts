// biome-ignore assist/source/organizeImports: <Autosave import>
import { apiUrl } from "@/core/settings";
import { getAllRanking, getProfile } from "@embeejayz/core-accounts";
import { FetchAccountsImplRepository } from "./infraestructure/fetch-accounts-impl.repository";

const fetchAccountsImplRepository = new FetchAccountsImplRepository(apiUrl);

export const GetAllRanking = getAllRanking(fetchAccountsImplRepository);

export const GetProfile = getProfile(fetchAccountsImplRepository);
