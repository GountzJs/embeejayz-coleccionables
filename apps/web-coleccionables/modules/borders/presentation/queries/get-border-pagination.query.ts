import type { GetPaginationBordersRequest } from "@embeejayz/core-borders";
import { useInfiniteQuery } from "@tanstack/react-query";
import { GetBordersPagination } from "../../DependencyInjection";

export function useGetBordersPaginationQuery({
	id,
	orderBy,
	sort,
	name,
}: GetPaginationBordersRequest) {
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
		queryKey: ["get-border-pagination", id, { orderBy, sort, name }],
		queryFn: ({ pageParam }) =>
			GetBordersPagination({
				id,
				page: pageParam,
				orderBy,
				sort,
				name,
			}),
		getNextPageParam: (lastPage) => {
			const currentPage = Number(lastPage.actualPage);
			const totalPages = lastPage.total?.pages;

			return currentPage < totalPages ? currentPage + 1 : undefined;
		},
	});

	const borders = data?.pages.flatMap((page) => page.items ?? []) ?? [];

	const totalItems = data?.pages[0]?.total?.items ?? 0;
	const totalPages = data?.pages[0]?.total?.pages ?? 0;

	return {
		borders,
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
