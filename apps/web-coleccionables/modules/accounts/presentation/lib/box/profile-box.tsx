// biome-ignore assist/source/organizeImports: <Autosave import>
import { cdnUrl } from "@/core/settings";
import type { TRank } from "@embeejayz/core-accounts";
import styles from "./styles.module.css";

interface Props {
	width: number;
	height: number;
	rank: TRank;
	children: React.ReactNode;
}

export function ProfileBox({ width, height, rank, children }: Props) {
	return (
		<div
			className={styles.container}
			style={{
				backgroundImage: `url(${cdnUrl}/images/rank/banner/${rank.toLowerCase()}.png)`,
				width: `${width}px`,
				height: `${height}px`,
				minWidth: `${width}px`,
				minHeight: `${height}px`,
			}}
		>
			{children}
		</div>
	);
}
