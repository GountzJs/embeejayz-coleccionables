import { ListBorderSkeleton } from "@modules/borders/presentation/components/list-border-skeleton";

export function LoadingBordersPage() {
	return (
		<div className="flex flex-col flex-1 gap-14 w-full h-full">
			<div className="flex items-center gap-4 h-14 w-full"></div>
			<ListBorderSkeleton />
		</div>
	);
}
