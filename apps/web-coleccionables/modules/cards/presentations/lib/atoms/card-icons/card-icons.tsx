import styles from "./styles.module.css";

interface Props {
	children: React.ReactNode;
	align?: "flex-start" | "center" | "flex-end";
}

export function CardIcons({ children, align = "center" }: Props) {
	return (
		<div className={styles["icons-container"]} style={{ alignItems: align }}>
			{children}
		</div>
	);
}
