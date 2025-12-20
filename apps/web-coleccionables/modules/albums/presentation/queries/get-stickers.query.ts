import { useQuery } from "@tanstack/react-query";
import { GetStickers } from "../../DependencyInjection";

interface Props {
	id: string;
}

export function useGetAllRankingQuery({ id }: Props) {
	const { data, isPending, error } = useQuery({
		queryKey: ["get-all-ranking", id],
		queryFn: () => GetStickers(id),
		retry: 1,
		staleTime: 15 * 60 * 1000,
		enabled: !!id,
	});

	return { data, isLoading: isPending, error };
}
