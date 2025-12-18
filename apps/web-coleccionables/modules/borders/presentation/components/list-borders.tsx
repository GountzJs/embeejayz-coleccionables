/** biome-ignore-all lint/suspicious/noArrayIndexKey: false positive */
import { InfiniteScrollObserver } from "@modules/common/presentation/lib/infinite-scroll";
import { useSpellsContext } from "../contexts/spells.context";
import { useGetBorderFilters } from "../hooks/get-border-filters";
import { useGetBordersPaginationQuery } from "../queries/get-border-pagination.query";
import { getRankByQuantity } from "../utils/rank";
import { BorderRank } from "./border-rank";
import { NotBorders } from "./not-borders";
import { SkeletonBorder } from "./skeleton-border";

interface Props {
	id: string;
	avatarUrl: string;

	username: string;
}

export function ListBorders({ id, avatarUrl, username }: Props) {
	const { leftIcon, rightIcon } = useSpellsContext();
	const { orderBy, sort, name } = useGetBorderFilters();
	const {
		borders,
		isFetching,
		isFetchingNextPage,
		hasNextPage,
		fetchNextPage,
	} = useGetBordersPaginationQuery({
		id,
		orderBy,
		sort,
		name,
	});

	if (!borders.length && name.length)
		return (
			<p className="text-2xl font-medium text-center">
				No se encontró ningun borde con el nombre buscado, intente con otro.
			</p>
		);

	if (!borders.length && !(isFetching || isFetchingNextPage))
		return <NotBorders />;

	return (
		<ul className="flex flex-wrap gap-4 h-full w-full max-w-full">
			{borders.map((border, idx) => (
				<li key={`${border.name}-${idx}`}>
					<BorderRank
						border={border}
						username={username}
						avatarUrl={avatarUrl}
						rank={getRankByQuantity(border.quantity, border.isSpecial)}
						leftIcon={leftIcon}
						rightIcon={rightIcon}
					/>
				</li>
			))}
			{(isFetching || isFetchingNextPage) &&
				Array.from({ length: 10 }).map((_, idx) => (
					<SkeletonBorder key={`skeleton-${idx}`} />
				))}

			{hasNextPage && (
				<InfiniteScrollObserver
					onIntersect={fetchNextPage}
					isLoading={isFetching}
				/>
			)}
		</ul>
	);
}
