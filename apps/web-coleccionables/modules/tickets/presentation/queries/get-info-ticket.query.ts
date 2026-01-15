import { useQuery } from "@tanstack/react-query";
import { GetInfoTicket } from "../../DependencyInjection";

interface Props {
	username: string;
}

export function useGetInfoTicketQuery({ username }: Props) {
	const { data, isLoading, error } = useQuery({
		queryKey: ["get-info-ticket", username],
		queryFn: () => GetInfoTicket(username),
		enabled: !!username,
	});

	return { data, isLoading, error };
}
