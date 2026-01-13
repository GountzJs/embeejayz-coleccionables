import { Icon } from "@embeejayz/ui-kit";
import { useEffect, useRef } from "react";

export function FloatElement() {
	const pRef = useRef<HTMLParagraphElement | null>(null);

	// biome-ignore lint/correctness/useExhaustiveDependencies: false positive
	useEffect(() => {
		if (pRef.current) {
			pRef.current.animate(
				[
					{
						transform: "translateY(-10px)",
					},

					{
						transform: "translateY(10px)",
					},
				],
				{
					duration: 1200,
					easing: "ease-in-out",
					iterations: Infinity,
					direction: "alternate",
				},
			);
		}
	}, [pRef]);

	return (
		<div className="flex items-center justify-center relative h-14 w-full">
			<div
				ref={pRef}
				className="absolute flex items-center justify-center gap-2 font-sigmar text-primary w-fit"
			>
				Seleccione un sobre para visualizar la apertuda de cartas
				<Icon name="chevron" size="24px" color="var(--color-primary)" />
			</div>
		</div>
	);
}
