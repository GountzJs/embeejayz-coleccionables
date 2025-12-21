import styled from "styled-components";

export const CardBox = styled.div`
	display: grid;
	grid-template-areas: "stack";
	width: 300px;
	height: 450px;

	& > * {
		grid-area: stack;
	}
`;
