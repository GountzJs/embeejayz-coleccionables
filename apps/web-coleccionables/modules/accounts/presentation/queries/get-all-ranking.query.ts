import { GetAllRanking } from "@modules/accounts/DependencyInjection";
import { useQuery } from "@tanstack/react-query";

export function useGetAllRankingQuery() {
	const { data, isPending, error } = useQuery({
		queryKey: ["get-all-ranking"],
		queryFn: () => GetAllRanking(),
		retry: 1,
	});

	return { data, isLoading: isPending, error };
}
