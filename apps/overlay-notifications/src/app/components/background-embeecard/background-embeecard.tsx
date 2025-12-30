import { cdnUrl } from "@/consts/settings";
import styles from "./styles.module.css";

export function BackgroundEmbeecard() {
	return (
		<img
			className={styles.image}
			src={`${cdnUrl}/images/cards
/bg-card.png`}
			width={300}
			height={450}
			alt="Cover Card"
			loading="eager"
			decoding="sync"
		/>
	);
}
