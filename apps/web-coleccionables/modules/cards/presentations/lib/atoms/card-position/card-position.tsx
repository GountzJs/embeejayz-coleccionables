import styles from "./styles.module.css";

interface Props {
  position: number;
  children: React.ReactNode;
}

export function CardPosition({ position, children }: Props) {
  return (
    <div
      className={styles["position-container"]}
      style={{
        transform: `translateZ(${position}px)`,
      }}
    >
      {children}
    </div>
  );
}
