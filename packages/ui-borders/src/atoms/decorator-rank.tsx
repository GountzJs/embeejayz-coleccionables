import type { TBorderRank } from "@embeejayz/core-borders";
import styled from "styled-components";

interface Props {
	cdnUrl: string;
	rank: TBorderRank;
	alt: string;
	width: number;
	height: number;
}

const Img = styled.img`
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	width: 100%;
`;

export function DecoratorRank({ cdnUrl, rank, alt, width, height }: Props) {
	const url = `${cdnUrl}/images/rank/borders/${rank.toLowerCase()}.webp`;

	return (
		<Img
			src={url}
			alt={alt}
			loading="lazy"
			decoding="async"
			width={width}
			height={height}
			style={{
				width,
				height,
			}}
		/>
	);
}
