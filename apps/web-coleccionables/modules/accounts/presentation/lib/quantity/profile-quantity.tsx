import styles from "./styles.module.css";

interface Props {
	quantity: number;
	label: string;
}

export function ProfileQuantity({ quantity, label }: Props) {
	return (
		<div className={styles["profile-quantity"]}>
			<p className={styles.quantity}>{quantity}</p>
			<p className={styles.label}>{label}</p>
		</div>
	);
}
