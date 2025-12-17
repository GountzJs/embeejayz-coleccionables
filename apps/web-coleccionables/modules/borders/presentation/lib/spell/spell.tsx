import { cdnUrl } from "@/core/settings";

interface Props {
	url: string;
	alt: string;
	width: number;
	height: number;
}

export function Spell({ url, alt, width, height }: Props) {
	return (
		<img
			src={`${cdnUrl}/${url}`}
			alt={alt}
			loading="lazy"
			decoding="async"
			width={width}
			height={height}
			style={{
				objectFit: "contain",
				width,
				height,
			}}
		/>
	);
}
