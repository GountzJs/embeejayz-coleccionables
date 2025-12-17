import { useQuery } from "@tanstack/react-query";
import { GetAllRanking } from "../../DependencyInjection";

const CACHE_DURATION = 15 * 60 * 1000; // 15 min

export function useGetAllRankingQuery() {
	const { data, isPending, error } = useQuery({
		queryKey: ["get-all-ranking"],
		queryFn: () => GetAllRanking(),
		retry: 1,
		staleTime: CACHE_DURATION,
	});

	return { data, isLoading: isPending, error };
}
