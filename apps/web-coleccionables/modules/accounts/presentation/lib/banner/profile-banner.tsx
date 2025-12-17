import { cdnUrl } from "@/core/settings";
import type { TRank } from "../../../domain/consts/rank.consts";
import { rank as rankConsts } from "../../../domain/consts/rank.consts";
import styles from "./styles.module.css";

interface Props {
	rank: TRank;
}

export function ProfileBanner({ rank }: Props) {
	const url = `${cdnUrl}/images/rank/banner/${rank.toLowerCase()}.png`;

	const width = getWidth(rank);
	const height = getHeight(rank);

	const classSize = `w-[${width}px] h-[${height}px]`;

	return (
		<img
			className={`${styles.img} ${classSize}`}
			src={url}
			loading="eager"
			decoding="sync"
			alt={rank}
			width={width}
			height={height}
		/>
	);
}

const getHeight = (rank: TRank) => {
	switch (rank) {
		case rankConsts.challenger:
			return 500;
		case rankConsts.master:
			return 488;
		case rankConsts.diamond:
			return 500;
		case rankConsts.platinum:
			return 488;
		case rankConsts.gold:
			return 488;
		case rankConsts.silver:
			return 482;
		case rankConsts.bronze:
			return 480;
		default:
			return 480;
	}
};

const getWidth = (rank: TRank) => {
	switch (rank) {
		case rankConsts.challenger:
			return 300;
		case rankConsts.master:
			return 230;
		case rankConsts.diamond:
			return 230;
		case rankConsts.platinum:
			return 230;
		case rankConsts.gold:
			return 230;
		case rankConsts.silver:
			return 282;
		case rankConsts.bronze:
			return 230;
		default:
			return 230;
	}
};
