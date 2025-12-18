import { SkeletonBorder } from "./skeleton-border";

export function ListBorderSkeleton() {
	return (
		<ul className="flex flex-wrap gap-4 w-full max-w-full">
			{Array.from({ length: 10 }).map((_, idx) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: <Migrate by preact and eslint>
				<li key={idx}>
					<SkeletonBorder />
				</li>
			))}
		</ul>
	);
}
