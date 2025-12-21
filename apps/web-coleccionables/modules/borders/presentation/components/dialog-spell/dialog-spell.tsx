// biome-ignore assist/source/organizeImports: <Auto save import>
import { cdnUrl } from "@/core/settings";
import { spells, type TSpell } from "@embeejayz/core-borders";
import { DialogBox } from "@modules/common/presentation/components/dialog-box";
import { useClickOutsideHook } from "@modules/common/presentation/hooks/click-outside.hook";
import { Field, Form, Formik } from "formik";
import { useRef } from "react";
import { useDialogSpellContext } from "../../contexts/dialog-spell.context";
import { useSpellsContext } from "../../contexts/spells.context";
import styles from "./styles.module.css";

export function DialogSpell() {
	const { open, closeDialog, icon } = useDialogSpellContext();
	const { leftIcon, rightIcon, changeLeftIcon, changeRightIcon } =
		useSpellsContext();
	const ref = useRef<HTMLFormElement>(null);
	useClickOutsideHook({ ref, handler: closeDialog });

	const handleOnSubmit = (values: { spell: TSpell }) => {
		if (icon === "left") changeLeftIcon(values.spell);
		if (icon === "right") changeRightIcon(values.spell);
		closeDialog();
	};

	const getLeftIcon = () => leftIcon ?? spells.flash;
	const getRightIcon = () => rightIcon ?? spells.ignite;

	const disabledSelected = (spell: TSpell) => {
		if (icon === "left") return spell === rightIcon;
		if (icon === "right") return spell === leftIcon;
		return false;
	};

	return (
		<DialogBox open={open}>
			<Formik
				key={icon}
				initialValues={{
					spell: icon === "left" ? getLeftIcon() : getRightIcon(),
				}}
				onSubmit={handleOnSubmit}
			>
				{() => (
					<Form ref={ref} className={styles.form}>
						<button
							type="button"
							className={styles.close}
							onClick={closeDialog}
						>
							<img
								src={`${cdnUrl}/images/svgs/close.svg`}
								loading="lazy"
								decoding="async"
								alt="Close dialog"
								width={24}
								height={24}
							/>
						</button>

						<h2 className={styles["sub-title"]}>Cambiar Hechizo</h2>

						<div className={styles["list-spells"]}>
							{Object.values(spells).map((spell) => (
								<label
									key={spell}
									htmlFor={`spell-${spell}`}
									className={styles["label-style"]}
								>
									<Field
										id={`spell-${spell}`}
										type="radio"
										name="spell"
										value={spell}
										disabled={disabledSelected(spell)}
										className={styles.radio}
									/>
									<div className={styles["spell-img"]}>
										<img
											src={`${cdnUrl}/images/spells/${spell}.jpg`}
											alt={`Spell ${spell}`}
											width={45}
											height={45}
										/>
									</div>
								</label>
							))}
						</div>

						<button
							type="submit"
							className="bg-gray-ultra-dark font-semibold outline-2 outline-primary rounded-md text-sm hover:scale-105 duration-200 transition-transform will-change-transform px-6 py-2 cursor-pointer"
							style={{
								boxShadow: "0 0 40px 10px rgba(226, 1, 45, 0.2)",
							}}
						>
							Aplicar
						</button>
					</Form>
				)}
			</Formik>
		</DialogBox>
	);
}
