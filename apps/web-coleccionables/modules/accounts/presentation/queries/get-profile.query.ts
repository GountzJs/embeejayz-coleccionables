import { useQuery } from "@tanstack/react-query";
import { GetProfile } from "../../DependencyInjection";

interface Props {
	username: string;
}

const CACHE_DURATION = 30 * 60 * 1000; // 30 min

export function useGetProfileQuery({ username }: Props) {
	const { data, isPending, error } = useQuery({
		queryKey: ["get-profile", username],
		queryFn: () => GetProfile({ username }),
		retry: 1,
		staleTime: CACHE_DURATION,
		enabled: !!username,
	});

	return { data, isLoading: isPending, error };
}
