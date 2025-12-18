// biome-ignore assist/source/organizeImports: <Auto save import>
import { cdnUrl } from "@/core/settings";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

export function ScrollUp() {
	const scrollUp = useRef<HTMLButtonElement>(null);
	const [active, setActive] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setActive(true);
			} else {
				setActive(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<button
			type="button"
			className={`${styles["scroll-up"]} ${active ? styles.active : ""}`}
			ref={scrollUp}
			onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
		>
			<img
				src={`${cdnUrl}/images/svgs/exp-icon.svg`}
				alt="Scroll Up icon"
				loading="lazy"
				decoding="async"
				width={80}
				height={80}
			/>
		</button>
	);
}
