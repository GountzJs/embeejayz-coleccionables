/** biome-ignore-all lint/suspicious/noArrayIndexKey: <Migration por react + eslint> */
export function SkeletonRanking() {
	return (
		<ul className="flex flex-col items-center gap-10 w-[700px] max-w-3/4">
			{Array.from({ length: 8 }).map((_, idx) => (
				<li
					key={idx}
					className="animate-bgfade h-[100px] rounded-md w-full"
					style={{
						backgroundImage:
							"linear-gradient(270deg,oklch(55.1% 0.027 264.364),oklch(44.6% 0.03 256.802),oklch(37.3% 0.034 259.733))",
						backgroundSize: "600% 600%",
					}}
				></li>
			))}
		</ul>
	);
}
