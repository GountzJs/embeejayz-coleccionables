import { cdnUrl } from "@/core/settings";

interface Props {
	url: string;
	alt: string;
	width: number;
	height: number;
}
function sanitizeUrl(url: string) {
	return url.replace(/[\u200E\u200F\u202A-\u202E]/g, "");
}

export function BorderCover({ url, alt, width, height }: Props) {
	return (
		<img
			src={sanitizeUrl(cdnUrl + url)}
			alt={alt}
			loading="lazy"
			decoding="async"
			width={width}
			height={height}
			style={{
				objectFit: "cover",
				width: `${width}px`,
				height: `${height}px`,
			}}
		/>
	);
}
