import styled from "styled-components";

interface Props {
	align?: "flex-start" | "center" | "flex-end";
}

export const CardIcons = styled.div<Props>`
	align-items: ${(props) => props.align};
	border-radius: 18px;
	display: flex;
	justify-content: space-between;
	margin-top: 22px;
	padding-inline: 30px;
	height: fit-content;
	width: 100%;
`;
