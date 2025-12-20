import type { ReactNode } from "react";
import styles from "./styles.module.css";

interface Props {
	url: string;
	children?: ReactNode;
}

export function BgBrillo({ url, children }: Props) {
	return (
		<div
			className={`w-full h-full relative overflow-hidden inline-block align-middle ${styles.logo}`}
			style={{
				backgroundImage: `url(${url})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		>
			{children}
		</div>
	);
}
