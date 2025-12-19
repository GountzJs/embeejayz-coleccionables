import { useId } from "react";

interface Props {
	width?: number;
	height?: number;
	color?: string;
}

export function CardGradient({
	width = 300,
	height = 450,
	color = "#711420",
}: Props) {
	const gradientIds = {
		a: useId(),
		b: useId(),
		c: useId(),
	};

	return (
		<svg viewBox="0 0 300 450" width={width} height={height}>
			<title>card-gradient</title>
			<defs>
				<linearGradient
					id={gradientIds.a}
					x1={149.71}
					x2={150.25}
					y1={402}
					y2={72.79}
					data-name="Degradado sin nombre 2"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0} stopColor={color} />
					<stop offset={1} />
				</linearGradient>
				<linearGradient
					xlinkHref={`#${gradientIds.a}`}
					id={gradientIds.b}
					x1={150.56}
					x2={297.17}
					y1={53.6}
					y2={53.6}
					data-name="Degradado sin nombre 2"
				/>
				<linearGradient
					xlinkHref={`#${gradientIds.a}`}
					id={gradientIds.c}
					x1={-28.43}
					x2={119.91}
					y1={53.6}
					y2={53.6}
					data-name="Degradado sin nombre 2"
					gradientTransform="matrix(-1 0 0 1 122.13 0)"
				/>
			</defs>
			<path
				d="M269.64 0H30.36C13.59 0 0 12.1 0 27.03v395.94C0 437.9 13.59 450 30.36 450h239.27c16.77 0 30.36-12.1 30.36-27.03V27.03C300 12.1 286.41 0 269.64 0Z"
				style={{
					fill: `url(#${gradientIds.a})`,
				}}
			/>
			<path
				d="m150.56 4.96 146.61 97.28-3.36-82.07L276.7 4.96H150.56z"
				style={{
					fill: `url(#${gradientIds.b})`,
				}}
			/>
			<path
				d="M150.56 4.96 2.22 102.24l3.15-76.98 17.31-20.3h127.88z"
				style={{
					fill: `url(#${gradientIds.c})`,
				}}
			/>
		</svg>
	);
}
