import styles from "./styles.module.css";

interface Props {
	name: string;
}

export function BorderName({ name }: Props) {
	return <p className={styles["text-name"]}>{name}</p>;
}
