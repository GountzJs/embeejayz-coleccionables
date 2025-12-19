import { InfiniteScrollObserver } from "@modules/common/presentation/lib/infinite-scroll";
import { NotEmbeeCards } from "../errors/not-embeecards";
import { useGetEmbeeCardsPaginationQuery } from "../queries/get-embeecard-pagination.query";
import { BtnDialog } from "./btn-dialog";
import { CardElement } from "./card-element";
import { SkeletonCard } from "./skeleton-card";

interface Props {
	id: string;
}

export function ListEmbeeCards({ id }: Props) {
	const {
		embeecards,
		isFetching,
		isFetchingNextPage,
		hasNextPage,
		fetchNextPage,
	} = useGetEmbeeCardsPaginationQuery({
		id,
	});

	if (!embeecards.length && !(isFetching || isFetchingNextPage))
		return <NotEmbeeCards />;

	return (
		<ul className="flex flex-wrap gap-4 justify-center h-auto max-h-full w-full">
			{embeecards?.map((props, idx) => (
				<li key={`${props.name}-${props.identify}-${idx}`}>
					<BtnDialog {...props}>
						<CardElement
							category={props.category}
							name={props.name}
							cover={props.cover}
							description={props.description}
							quantity={props.quantity}
							identify={props.identify}
						/>
					</BtnDialog>
				</li>
			))}

			{(isFetching || isFetchingNextPage) &&
				Array.from({ length: 10 }, (_, idx) => (
					<li
						// biome-ignore lint/suspicious/noArrayIndexKey: ignore
						key={`skeleton-${idx}`}
						className="w-[300px] h-[450px]"
						style={{ transition: "filter 200ms ease" }}
					>
						<SkeletonCard />
					</li>
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
