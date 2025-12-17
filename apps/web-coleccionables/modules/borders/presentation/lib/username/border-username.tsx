import styles from "./styles.module.css";

interface Props {
	username: string;
}

export function BorderUsername({ username }: Props) {
	return <p className={styles.text}>{username}</p>;
}
