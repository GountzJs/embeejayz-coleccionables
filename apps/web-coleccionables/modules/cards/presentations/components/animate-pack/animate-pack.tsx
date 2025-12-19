/** biome-ignore-all assist/source/organizeImports: <Auto save import> */
import { cdnUrl } from "@/core/settings";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

interface Props {
	isOpen: boolean;
}

export function AnimatePack({ isOpen }: Props) {
	const [showTop, setShowTop] = useState(false);
	// biome-ignore lint/suspicious/noExplicitAny: false
	const [timers, setTimers] = useState<any[]>([]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: false
	useEffect(() => {
		if (isOpen) {
			const timer = setTimeout(() => {
				setShowTop(false);
			}, 800);
			setTimers((prev) => [...prev, timer]);
		} else {
			setShowTop(true);
			timers.map((timer) => clearTimeout(timer));
		}
		return () => {
			timers.map((timer) => clearTimeout(timer));
		};
	}, [isOpen]);

	return (
		<div className={styles.container}>
			<img
				className={styles["sobre-bottom"]}
				src={`${cdnUrl}/images/cards/sobre-body.png`}
				alt="Sobre cuerpo sobre"
				width={310}
				height={416}
				style={{ aspectRatio: "310/416" }}
				loading="eager"
				decoding="sync"
			/>
			{showTop && (
				<img
					className={`${styles["sobre-top"]} ${isOpen && styles["open-sobre"]}`}
					src={`${cdnUrl}/images/cards/sobre-top.png`}
					alt="Sobre cuerpo top"
					width={310}
					height={106}
					style={{
						aspectRatio: "310/106",
					}}
					loading="eager"
					decoding="sync"
				/>
			)}
		</div>
	);
}
