import { DialogBox } from "@modules/common/presentation/components/dialog-box";
import { useClickOutsideHook } from "@modules/common/presentation/hooks/click-outside.hook";
import { useEffect, useRef, useState } from "react";
import { useCardDialogContext } from "../../contexts/card-dialog.context";
import { AnimatePack } from "../animate-pack/animate-pack";
import { BtnClose } from "./btn-close/btn-close";
import { BtnDownload } from "./btn-download/btn-download";
import styles from "./styles.module.css";
import { ViewCard } from "./view-card";

export function CardDialog() {
	const { open, closeDialog, card } = useCardDialogContext();
	const cardRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement | null>(null);
	const [changeCardPosition, setChangeCardPosition] = useState<boolean>(false);
	// biome-ignore lint/suspicious/noExplicitAny: ignore any
	const [timer, setTimer] = useState<any[]>([]);
	const [isAnimate, setIsAnimate] = useState<boolean>(false);
	const [movePack, setMovePack] = useState<boolean>(false);
	useClickOutsideHook({ ref: containerRef, handler: closeDialog });

	const resetAnimate = () => {
		setMovePack(false);
		setIsAnimate(false);
		setChangeCardPosition(false);
		setTimer([]);
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: ignore exhaustive dependencies
	useEffect(() => {
		if (open) {
			setIsAnimate(true);
			setTimer((prev) => [
				...prev,
				setTimeout(() => setChangeCardPosition(true), 1000),
			]);
			setTimer((prev) => [...prev, setTimeout(() => setMovePack(true), 1400)]);
		} else {
			timer.map((timer) => clearTimeout(timer));
			resetAnimate();
		}
		return () => {
			timer.map((timer) => clearTimeout(timer));
		};
	}, [open]);

	return (
		<DialogBox open={open}>
			<div ref={containerRef} className={styles["content-container"]}>
				<div className={styles["card-container"]}>
					{card && (
						<div
							className={`${styles["card-box"]} ${
								changeCardPosition && styles["active-position"]
							}`}
						>
							<ViewCard card={card} elementRef={cardRef} />
						</div>
					)}
					{card && (
						<div
							className={`${styles["animate-container"]} ${
								movePack && styles["move-container"]
							}`}
						>
							<AnimatePack isOpen={isAnimate} />
						</div>
					)}
				</div>
				{card && (
					<div className={styles["card-info-container"]}>
						<BtnClose />
						<BtnDownload element={cardRef} name={card.name} />
					</div>
				)}
			</div>
		</DialogBox>
	);
}
