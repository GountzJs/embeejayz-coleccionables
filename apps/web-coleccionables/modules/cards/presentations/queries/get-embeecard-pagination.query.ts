import { useInfiniteQuery } from "@tanstack/react-query";
import { GetEmbeecardsPagination } from "../../DependencyInjection";

interface Props {
	id: string;
}

export function useGetEmbeeCardsPaginationQuery({ id }: Props) {
	const {
		data,
		error,
		fetchNextPage,
		hasNextPage,
		isFetching,
		isFetchingNextPage,
		status,
		refetch,
	} = useInfiniteQuery({
		initialPageParam: 1,
		staleTime: 5 * 60 * 1000,
		queryKey: ["get-embeecards-pagination", id],
		queryFn: ({ pageParam }) =>
			GetEmbeecardsPagination({
				id,
				page: pageParam,
			}),
		getNextPageParam: (lastPage) => {
			const currentPage = Number(lastPage.page);
			const totalPages = lastPage.total.pages;

			return currentPage < totalPages ? currentPage + 1 : undefined;
		},
	});

	const embeecards = data?.pages.flatMap((page) => page.data) ?? [];

	const totalItems = data?.pages[0]?.total.items ?? 0;
	const totalPages = data?.pages[0]?.total.pages ?? 0;

	return {
		embeecards,
		totalItems,
		totalPages,
		data,
		error,
		hasNextPage,
		isFetching,
		isFetchingNextPage,
		status,
		fetchNextPage,
		refetch,
	};
}
