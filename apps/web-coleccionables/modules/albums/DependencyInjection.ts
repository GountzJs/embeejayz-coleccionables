// biome-ignore assist/source/organizeImports: <Autosave import>
import { apiUrl } from "@/core/settings";
import { getStickersUseCase } from "@embeejayz/core-albums";
import { FetchWorlds2025ImplRepository } from "./infraestructure/fetch-worlds2025-impl.repository";

const fetchWorlds2025ImplRepository = new FetchWorlds2025ImplRepository(apiUrl);

export const GetStickers = getStickersUseCase(fetchWorlds2025ImplRepository);
