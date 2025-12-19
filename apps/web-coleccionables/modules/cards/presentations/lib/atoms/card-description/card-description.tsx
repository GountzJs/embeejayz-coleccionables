/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: false positive */
import DOMPurify from "isomorphic-dompurify";
import styles from "./styles.module.css";

interface Props {
	color?: string;
	content: string;
}

export function CardDescription({ color, content }: Props) {
	const sanitizedContent = DOMPurify.sanitize(content, {
		USE_PROFILES: { html: true },
	});

	return (
		<p
			className={styles.description}
			style={{ backgroundColor: color }}
			dangerouslySetInnerHTML={{ __html: sanitizedContent }}
		></p>
	);
}
