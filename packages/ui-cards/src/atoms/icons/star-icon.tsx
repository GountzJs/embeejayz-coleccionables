import type { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
	size?: number;
	color?: string;
	isComplete?: boolean;
}

export function StarIcon({
	size = 10.25,
	color = "#e3092b",
	isComplete = false,
	...props
}: Props) {
	if (isComplete) {
		const aspectRatio = 10.25 / 10.77;
		const height = Number(size) * aspectRatio;

		return (
			<svg width={size} height={height} viewBox="0 0 10.77 10.25" {...props}>
				<title>star complete</title>
				<path
					fill={color}
					d="m5.38 0 1.26 3.93 4.13-.02-3.35 2.42 1.29 3.92-3.33-2.44-3.32 2.44 1.29-3.92L0 3.91l4.12.02L5.38 0z"
				/>
			</svg>
		);
	}

	const aspectRatio = 12.46 / 13.05;
	const height = Number(size) * aspectRatio;

	return (
		<svg viewBox="0 0 13.05 12.46" width={size} height={height} {...props}>
			<title>star</title>
			<path
				fill="none"
				stroke={color}
				strokeMiterlimit={10}
				strokeWidth={0.75}
				d="m6.52 1.23 1.26 3.93 4.13-.02-3.35 2.41 1.29 3.92-3.33-2.43-3.32 2.43 1.28-3.92-3.34-2.41 4.12.02 1.26-3.93z"
			/>
		</svg>
	);
}
