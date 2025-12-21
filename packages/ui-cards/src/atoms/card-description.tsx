/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: false positive */
import DOMPurify from "isomorphic-dompurify";
import styled from "styled-components";

interface Props {
	color?: string;
	content: string;
}

const Text = styled.p<{ color?: string }>`
	background-color: ${(props) => props.color};
	border-radius: 6px;
	text-align: center;
	margin: auto;
	color: #fff;
	font-size: 0.75rem;
	font-weight: 500;
	text-overflow: ellipsis;
	font-family: "Montserrat";
	overflow: hidden;
	padding-top: 10px;
	padding-bottom: 10px;
	padding-inline: 8px;
	height: 100%;
	width: 250px;
	user-select: none;
	text-wrap: pretty;
`;

export function CardDescription({ color, content }: Props) {
	const sanitizedContent = DOMPurify.sanitize(content, {
		USE_PROFILES: { html: true },
	});

	return (
		<Text
			color={color}
			dangerouslySetInnerHTML={{ __html: sanitizedContent }}
		></Text>
	);
}
