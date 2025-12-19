import { ListSkeletonCard } from "@modules/cards/presentations/components/list-skeleton-card";

export function LoadingEmbeeCardsPage() {
	return (
		<div className="flex flex-col flex-1 gap-14 w-full h-full">
			<div className="flex items-center gap-4 h-14 w-full"></div>
			<ListSkeletonCard />
		</div>
	);
}
