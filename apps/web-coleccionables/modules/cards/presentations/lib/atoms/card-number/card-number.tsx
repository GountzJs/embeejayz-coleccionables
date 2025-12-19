import styles from "./styles.module.css";

interface Props {
  identifier: string;
}
export function CardNumber({ identifier }: Props) {
  return (
    <div className={styles.number}>
      <p>#{identifier}</p>
    </div>
  );
}
