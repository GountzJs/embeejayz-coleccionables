import styles from "./styles.module.css";

export function CardCover({ url }: { url: string }) {
  return (
    <div
      className={styles["image-wrapper"]}
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
}
