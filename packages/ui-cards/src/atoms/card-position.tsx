import styled from "styled-components";

interface Props {
	position: number;
}

export const CardPosition = styled.div<Props>`
	transform: translateZ(${(props) => props.position}px);
	width: 300px;
	height: 450px;
`;
