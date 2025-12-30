import styles from "./styles.module.css";

interface Props {
	message: string;
	children?: React.ReactNode;
}

export function Snackbar({ message, children }: Props) {
	return (
		<div className={styles.container}>
			{children}
			<p className={styles.text}>{message}</p>
		</div>
	);
}
