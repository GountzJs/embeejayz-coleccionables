import { StarIcon } from "../../atoms/icons";
import styles from "./styles.module.css";

interface Props {
	quantity: number;
	color?: string;
}

export function StarRanking({ quantity, color = "#e3092b" }: Props) {
	return (
		<ul className={styles["list-container"]}>
			{Array.from({ length: 5 }, (_, i) => i + 1).map((i) => (
				<li key={i}>
					<StarIcon
						size={18}
						isComplete={i <= quantity}
						color={color}
						style={{ display: "block" }}
					/>
				</li>
			))}
		</ul>
	);
}
