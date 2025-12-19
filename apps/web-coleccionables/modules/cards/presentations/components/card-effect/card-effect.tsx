import { useEffect, useState } from "react";
import styles from "./card-effect.module.css";

interface CardMoveProps {
	children: React.ReactNode;
	maxTilt?: number;
	ranking?: number;
	tiltX: number;
	tiltY: number;
}

export function CardEffect({
	children,
	ranking = 1,
	tiltX,
	tiltY,
}: CardMoveProps) {
	const [gradient, setGradient] = useState<string>("");
	const getOpacity = () => {
		if (ranking === 1) return styles.opacity0;
		if (ranking === 2) return styles.opacity10;
		if (ranking === 3) return styles.opacity20;
		if (ranking === 4) return styles.opacity40;
		return styles.opacity50;
	};

	useEffect(() => {
		const xPercent = tiltX / 15;
		const yPercent = tiltY / 15;

		const intensity = Math.sqrt(xPercent ** 2 + yPercent ** 2);

		const mixFactor = Math.min(1, intensity);

		const blueStop = Math.max(10, 30 - mixFactor * 10);
		const pinkStop = Math.max(40, 55 - mixFactor * 15);
		const yellowStop = Math.min(100, 85 - mixFactor * 10);

		let direction = "to left top";

		if (Math.abs(yPercent) < 0.3) {
			if (xPercent < -0.5) {
				direction = "to left";
			} else if (xPercent > 0.5) {
				direction = "to right";
			}
		} else if (Math.abs(xPercent) < 0.3) {
			if (yPercent < -0.5) {
				direction = "to top";
			} else if (yPercent > 0.5) {
				direction = "to bottom";
			}
		} else {
			if (xPercent > 0 && yPercent < 0) direction = "to right top";
			if (xPercent < 0 && yPercent < 0) direction = "to left top";
			if (xPercent > 0 && yPercent > 0) direction = "to right bottom";
			if (xPercent < 0 && yPercent > 0) direction = "to left bottom";
		}

		if (tiltX === 0 && tiltY === 0) {
			setGradient("");
		} else {
			setGradient(
				`linear-gradient(${direction}, #4158D0 ${blueStop}%, #C850C0 ${pinkStop}%, #FFCC70 ${yellowStop}%)`,
			);
		}
	}, [tiltX, tiltY]);

	return (
		<div>
			{children}
			<div
				className={`${styles.overlay} ${getOpacity()}`}
				style={{
					background: gradient,
					mixBlendMode: "hard-light",
				}}
			></div>
		</div>
	);
}
