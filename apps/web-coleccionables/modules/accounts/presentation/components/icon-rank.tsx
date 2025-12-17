import { cdnUrl } from "@/core/settings";
import type { TRank } from "../../domain/consts/rank.enum";

interface Props {
	rank: TRank;
	width?: number;
	height?: number;
}

export function IconRank({ rank, width = 40, height = 40 }: Props) {
	return (
		<img
			src={`${cdnUrl}/images/rank/icon/${rank.toLowerCase()}.webp`}
			loading="eager"
			decoding="sync"
			height={height}
			width={width}
			alt={`Rank ${rank}`}
		/>
	);
}
