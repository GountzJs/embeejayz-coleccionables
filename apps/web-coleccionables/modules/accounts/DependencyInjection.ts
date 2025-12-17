import { getAllRanking } from "./application/use-cases/get-all-ranking";
import { ApiRankingImplRepository } from "./infraestructure/api-ranking.repository";

export const GetAllRanking = () => getAllRanking(ApiRankingImplRepository);
