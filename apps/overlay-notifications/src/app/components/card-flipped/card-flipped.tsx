import type React from "react";
import styles from "./styles.module.css";

interface CardProps {
	front: React.ReactNode;
	back: React.ReactNode;
	showCard?: boolean;
}

export function CardFlipped({ front, back, showCard }: CardProps) {
	return (
		<div className={styles.cardContainer}>
			<div className={`${styles.card} ${showCard ? "" : styles.flipped}`}>
				<div className={styles.cardFace}>{front}</div>
				<div className={`${styles.cardFace} ${styles.cardBack}`}>{back}</div>
			</div>
		</div>
	);
}
