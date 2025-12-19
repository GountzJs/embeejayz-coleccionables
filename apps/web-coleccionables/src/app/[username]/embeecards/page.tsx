import { useProfileContext } from "@modules/accounts/presentation/contexts/profile.context";
import { CardDialog } from "@modules/cards/presentations/components/dialog-card/card-dialog";
import { ListEmbeeCards } from "@modules/cards/presentations/components/list-embeecards";
import { ListSkeletonCard } from "@modules/cards/presentations/components/list-skeleton-card";
import { CardDialogProvider } from "@modules/cards/presentations/contexts/card-dialog.context";
import { NotEmbeeCards } from "@modules/cards/presentations/errors/not-embeecards";
import { Suspense } from "react";

export default function Page() {
	return (
		<div className="flex flex-col flex-1 gap-14 w-full h-full">
			<CardDialogProvider>
				<ViewEmbeeCards />
				<CardDialog />
			</CardDialogProvider>
		</div>
	);
}

function ViewEmbeeCards() {
	const { isLoading, data } = useProfileContext();

	if (!data) return <ListSkeletonCard />;

	return (
		<div className="flex flex-1 w-full h-full">
			{isLoading && <p>Cargando...</p>}
			{!isLoading && data.total.cards === 0 && <NotEmbeeCards />}
			{!isLoading && data.total.cards > 0 && (
				<Suspense fallback={<ListSkeletonCard />}>
					<ListEmbeeCards id={data.id} />
				</Suspense>
			)}
		</div>
	);
}
