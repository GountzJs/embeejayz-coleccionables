import { getStickersUseCase } from "./application/use-cases/get-stickers";
import { fetchWorlds2025ImplRepository } from "./infraestructure/fetch-worlds2025-impl.repository";

export const GetStickers = getStickersUseCase(fetchWorlds2025ImplRepository);
