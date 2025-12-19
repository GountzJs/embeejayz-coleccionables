import html2canvas from "html2canvas";
import { type RefObject, useState } from "react";

interface Props {
	element: RefObject<HTMLElement | null>;
	name: string;
}

export function useDownloadHtml({ element, name }: Props) {
	const [isDownloading, setIsDownloading] = useState(false);

	const handleDownload = () => {
		if (!element.current) return;

		setIsDownloading(true);

		html2canvas(element.current, {
			backgroundColor: null,
			scale: 1,
			useCORS: true,
		})
			.then((canvas) => {
				const link = document.createElement("a");
				link.download = `${name}.png`;
				link.href = canvas.toDataURL("image/png");
				link.click();
			})
			.finally(() => setIsDownloading(false));
	};

	return {
		handleDownload,
		isDownloading,
	};
}
