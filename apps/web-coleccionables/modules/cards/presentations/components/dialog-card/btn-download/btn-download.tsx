// biome-ignore assist/source/organizeImports: <Autosave import>
import { cdnUrl } from "@/core/settings";
import { useDownloadHtml } from "@modules/common/presentation/hooks/download-html.hook";
import type { RefObject } from "react";
import styles from "./styles.module.css";

interface Props {
	element: RefObject<HTMLElement | null>;
	name: string;
}

export function BtnDownload({ element, name }: Props) {
	const { handleDownload, isDownloading } = useDownloadHtml({ element, name });

	return (
		<button
			type="button"
			className={styles["btn-download"]}
			disabled={isDownloading}
			onClick={handleDownload}
		>
			<img
				src={`${cdnUrl}/images/svgs/download.svg`}
				alt="download"
				loading="lazy"
				decoding="async"
				width={26}
				height={26}
			/>
			Descargar
		</button>
	);
}
