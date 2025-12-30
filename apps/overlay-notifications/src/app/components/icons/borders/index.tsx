import { cdnUrl } from "@/consts/settings";
import styles from "./styles.module.css";

export function BorderIcon() {
	const aspectRatio = 445 / 431;
	const width = 40;
	const height = width * aspectRatio;

	return (
		<img
			className={styles.image}
			src={`${cdnUrl}/images/banner/bordes.png`}
			width={width}
			height={height}
			loading="lazy"
			decoding="async"
			alt="Icon Border"
		/>
	);
}
