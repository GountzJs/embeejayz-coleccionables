import { cdnUrl } from "@/core/settings";
import type { TRank } from "../../../domain/consts/rank.enum";

interface Props {
	rank: TRank;
	width?: number;
	height?: number;
}

export function ProfileSummonerIcon({ rank, width, height }: Props) {
	const url = `${cdnUrl}/images/rank/summoner-icon/${rank.toLowerCase()}.webp`;

	return (
		<img
			src={url}
			loading="eager"
			decoding="sync"
			alt={rank}
			width={width}
			height={height}
			style={{
				objectFit: "cover",
				width: width,
				height: height,
			}}
		/>
	);
}
