import { cdnUrl } from "@/core/settings";
import type { TRank } from "../../../domain/consts/rank.consts";
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
		case rank.Challenger:
			return 500;
		case rank.Master:
			return 488;
		case rank.Diamond:
			return 500;
		case rank.Platinum:
			return 488;
		case rank.Gold:
			return 488;
		case rank.Silver:
			return 482;
		case rank.Bronze:
			return 480;
		default:
			return 480;
	}
};

const getWidth = (rank: TRank) => {
	switch (rank) {
		case rank.Challenger:
			return 300;
		case rank.Master:
			return 230;
		case rank.Diamond:
			return 230;
		case rank.Platinum:
			return 230;
		case rank.Gold:
			return 230;
		case rank.Silver:
			return 282;
		case rank.Bronze:
			return 230;
		default:
			return 230;
	}
};
