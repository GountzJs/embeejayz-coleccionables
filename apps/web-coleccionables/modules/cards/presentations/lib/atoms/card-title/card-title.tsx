/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: false positive */
import DOMPurify from "isomorphic-dompurify";
import styles from "./styles.module.css";

interface Props {
	content: string;
	color?: string;
}

export function CardTitle({ content, color }: Props) {
	const sanitizedContent = DOMPurify.sanitize(content, {
		USE_PROFILES: { html: true },
	});

	return (
		<p
			className={styles.title}
			style={{ color }}
			dangerouslySetInnerHTML={{ __html: sanitizedContent }}
		/>
	);
}
