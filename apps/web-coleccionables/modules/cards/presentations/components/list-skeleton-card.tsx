import { SkeletonCard } from "./skeleton-card";

export function ListSkeletonCard() {
	return (
		<ul className="flex flex-wrap gap-4 justify-center h-auto max-h-full w-full">
			{Array.from({ length: 10 }, (_, idx) => (
				<li
					// biome-ignore lint/suspicious/noArrayIndexKey: ignore
					key={idx}
					className="w-[300px] h-[450px]"
					style={{ transition: "filter 200ms ease" }}
				>
					<SkeletonCard />
				</li>
			))}
		</ul>
	);
}
