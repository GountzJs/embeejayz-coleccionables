import type { HTMLAttributes } from "react";
import styles from "./styles.module.css";

interface Props extends HTMLAttributes<HTMLParagraphElement> {
	username: string;
}

export function ProfileUsername({ username, ...props }: Props) {
	return (
		<p {...props} className={`${styles.username} ${props.className || ""}`}>
			{username}
		</p>
	);
}
