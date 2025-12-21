/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: false positive */
import DOMPurify from "isomorphic-dompurify";
import styled from "styled-components";

interface Props {
	content: string;
	color?: string;
}

const Text = styled.p<{ color?: string }>`
	color: ${(props) => props.color || "#fff"};
	text-align: center;
	font-family: var(--font-sigmar);
	user-select: none;
	font-weight: 400;
	font-size: 1.5rem;
	padding: 0;
	line-height: 1;
	margin: 0;
	margin-inline: auto;
	text-shadow: 0 0 4px #000;
	text-wrap: wrap;
	width: 250px;
`;

export function CardTitle({ content, color }: Props) {
	const sanitizedContent = DOMPurify.sanitize(content, {
		USE_PROFILES: { html: true },
	});

	return (
		<Text
			color={color}
			dangerouslySetInnerHTML={{ __html: sanitizedContent }}
		/>
	);
}
