import type React from "react";
import styles from "./styles.module.css";

interface Props {
	children: React.ReactNode;
	paddingTop?: string;
}
export function CardContent({ children, paddingTop = "80px" }: Props) {
	return (
		<div className={styles["content-container"]} style={{ paddingTop }}>
			{children}
		</div>
	);
}
