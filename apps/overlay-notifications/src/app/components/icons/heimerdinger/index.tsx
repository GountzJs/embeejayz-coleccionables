import styles from "./styles.module.css";

export function HeimerdingerIcon() {
	const aspectRatio = 19 / 16;
	const width = 40;
	const height = width * aspectRatio;

	return (
		<img
			className={styles.image}
			src={"/heimerdinger.png"}
			width={width}
			height={height}
			loading="lazy"
			decoding="async"
			alt="Icon Heimerdinger"
		/>
	);
}
