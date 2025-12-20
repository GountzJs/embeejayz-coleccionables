import type { HTMLAttributes } from "react";
import styles from "./styles.module.css";

interface Props extends HTMLAttributes<HTMLImageElement> {
	avatar: string;
	height: number;
	width: number;
}

export function ProfileAvatar({ avatar, height, width, ...props }: Props) {
	return (
		<img
			{...props}
			src={avatar}
			className={`${styles.img} ${props.className || ""}`}
			loading="eager"
			decoding="sync"
			alt="Rank Icon"
			height={height}
			width={width}
			style={{ height, width }}
		/>
	);
}
