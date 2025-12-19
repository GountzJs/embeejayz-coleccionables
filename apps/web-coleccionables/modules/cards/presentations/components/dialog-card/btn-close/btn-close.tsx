import { cdnUrl } from "@/core/settings";
import { useCardDialogContext } from "../../../contexts/card-dialog.context";
import styles from "./styles.module.css";

export function BtnClose() {
	const { closeDialog } = useCardDialogContext();

	return (
		<button type="button" className={styles["btn-close"]} onClick={closeDialog}>
			<img
				src={`${cdnUrl}/images/svgs/close.svg`}
				alt="Close"
				width={28}
				height={28}
			/>
		</button>
	);
}
