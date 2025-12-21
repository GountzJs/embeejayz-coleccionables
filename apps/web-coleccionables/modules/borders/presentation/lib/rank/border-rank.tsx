// biome-ignore assist/source/organizeImports: <Autosave import>
import { cdnUrl } from "@/core/settings";
import type { TBorderRank } from "@embeejayz/core-borders";
import styles from "./styles.module.css";

interface Props {
	rank: TBorderRank;
	alt: string;
	width: number;
	height: number;
}

export function BorderRank({ rank, alt, width, height }: Props) {
	const url = `${cdnUrl}/images/rank/borders/${rank.toLowerCase()}.webp`;

	return (
		<img
			className={styles["img-rank"]}
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
