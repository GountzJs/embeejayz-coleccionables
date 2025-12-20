import styles from "./styles.module.css";

interface Props {
	children: React.ReactNode;
}

export function CardBox({ children }: Props) {
	return <div className={styles.container}>{children}</div>;
}
