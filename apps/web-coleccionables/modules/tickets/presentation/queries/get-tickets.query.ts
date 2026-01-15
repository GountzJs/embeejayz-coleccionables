import { useQuery } from "@tanstack/react-query";
import { GetAllTickets } from "../../DependencyInjection";

type Props = {
	id: string;
};

export function useGetTicketsQuery({ id }: Props) {
	const { data, isLoading, error } = useQuery({
		queryKey: ["get-tickets", id],
		queryFn: () => GetAllTickets(id),
		enabled: !!id,
	});

	return { data, isLoading, error };
}
