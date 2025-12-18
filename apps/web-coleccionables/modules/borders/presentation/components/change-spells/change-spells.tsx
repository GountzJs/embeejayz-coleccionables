import { cdnUrl } from "@/core/settings";
import { useDialogSpellContext } from "../../contexts/dialog-spell.context";
import { useSpellsContext } from "../../contexts/spells.context";
import styles from "./styles.module.css";

export function ChangeSpells() {
	const { leftIcon, rightIcon } = useSpellsContext();
	const { openDialog } = useDialogSpellContext();

	return (
		<div className={styles.container}>
			<button type="button" onClick={() => openDialog("left")}>
				<img
					src={`${cdnUrl}/images/spells/${leftIcon}.jpg`}
					alt="Spell Left"
					width={45}
					height={45}
				/>
			</button>
			<button type="button" onClick={() => openDialog("right")}>
				<img
					src={`${cdnUrl}/images/spells/${rightIcon}.jpg`}
					alt="Spell Right"
					width={45}
					height={45}
				/>
			</button>
		</div>
	);
}
