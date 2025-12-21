import styled from "styled-components";

export const BorderNamePosition = styled.div<{
	bottom: string;
	left: string;
	width: string;
}>`
    position: absolute;
	bottom: ${(props) => props.bottom};
	left: ${(props) => props.left};
	width: ${(props) => props.width};
`;
