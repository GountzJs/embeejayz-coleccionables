import type { HTMLAttributes } from "react";
import styles from "./styles.module.css";

interface Props extends HTMLAttributes<HTMLSpanElement> {
	total: number;
}

export function ProfileTotal({ total, ...props }: Props) {
	return (
		<p className={styles["profile-total"]}>
			<span
				{...props}
				className={`${styles["profile-total-label"]} ${props.className || ""}`}
			>
				Total:
			</span>{" "}
			{total}
		</p>
	);
}
