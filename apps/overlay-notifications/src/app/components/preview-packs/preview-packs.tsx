import { usePacksContext } from "@/app/contexts/packs/packs.context";
import { cdnUrl } from "@/consts/settings";
import styles from "./styles.module.css";

export function PreviewPacks() {
	const { packs, selectPack, packSelected, removePack, isPreview } =
		usePacksContext();

	const handleOnClick = (id: string) => {
		removePack(id);
		selectPack(id);
	};

	return (
		<ul
			className={styles.container}
			style={{
				visibility: isPreview ? "visible" : "hidden",
				pointerEvents: isPreview ? "auto" : "none",
			}}
		>
			{packs.map(({ id, user: { display_name } }) => (
				<li key={id}>
					<button
						type="button"
						disabled={packSelected !== null}
						className={styles.buttonSelected}
						style={{
							backgroundImage: `url(${cdnUrl}/images/cards/bg-card.png)`,
						}}
						onClick={() => handleOnClick(id)}
					>
						<p className={styles.text}>@{display_name}</p>
					</button>
				</li>
			))}
		</ul>
	);
}
