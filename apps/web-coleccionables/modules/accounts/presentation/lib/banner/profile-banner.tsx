import { cdnUrl } from "@/core/settings";
import { Rank, type TRank } from "../../../domain/consts/rank.enum";
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
		case Rank.Challenger:
			return 500;
		case Rank.Master:
			return 488;
		case Rank.Diamond:
			return 500;
		case Rank.Platinum:
			return 488;
		case Rank.Gold:
			return 488;
		case Rank.Silver:
			return 482;
		case Rank.Bronze:
			return 480;
		default:
			return 480;
	}
};

const getWidth = (rank: TRank) => {
	switch (rank) {
		case Rank.Challenger:
			return 300;
		case Rank.Master:
			return 230;
		case Rank.Diamond:
			return 230;
		case Rank.Platinum:
			return 230;
		case Rank.Gold:
			return 230;
		case Rank.Silver:
			return 282;
		case Rank.Bronze:
			return 230;
		default:
			return 230;
	}
};
