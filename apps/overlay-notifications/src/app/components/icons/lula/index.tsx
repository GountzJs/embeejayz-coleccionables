import styles from "./styles.module.css";

export function LulaIcon() {
  const aspectRatio = 10 / 7;
  const width = 40;
  const height = width * aspectRatio;

  return (
    <img
      className={styles.image}
      src={"/lula.png"}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      alt="Icon Lula"
    />
  );
}
