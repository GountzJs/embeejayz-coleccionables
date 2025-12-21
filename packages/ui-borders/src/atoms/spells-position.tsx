import styled from "styled-components";

export const SpellsPosition = styled.div<{
	bottom: string;
	left: string;
	gap: string;
}>`
	display: flex;
	position: absolute;
	bottom: ${(props) => props.bottom};
	left: ${(props) => props.left};
	gap: ${(props) => props.gap};
`;
