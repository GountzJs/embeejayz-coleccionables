export function SkeletonCard() {
	return (
		<div
			className="rounded-3xl w-full h-full animate-bgfade"
			style={{
				background:
					"linear-gradient(270deg,oklch(55.1% 0.027 264.364),oklch(44.6% 0.03 256.802),oklch(37.3% 0.034 259.733))",
				backgroundSize: "600% 600%",
			}}
		></div>
	);
}
