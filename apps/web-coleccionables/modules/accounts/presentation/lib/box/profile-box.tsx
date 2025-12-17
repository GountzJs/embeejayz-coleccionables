import { cdnUrl } from "@/app/core/settings";
import type { Rank } from "@/app/rankings/models/enums/rank.enum";
import styles from "./styles.module.css";

interface Props {
  width: number;
  height: number;
  rank: Rank;
  children: React.ReactNode;
}

export function ProfileBox({ width, height, rank, children }: Props) {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${cdnUrl}/images/rank/banner/${rank.toLowerCase()}.png)`,
        width: `${width}px`,
        height: `${height}px`,
        minWidth: `${width}px`,
        minHeight: `${height}px`,
      }}
    >
      {children}
    </div>
  );
}
