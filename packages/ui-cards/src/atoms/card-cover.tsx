import styled from "styled-components";

interface Props {
	url: string;
}

export const CardCover = styled.div<Props>`
	background-image: url(${(props) => props.url});
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
	background-color: transparent;
	width: 260px;
	height: 180px;
	min-width: 260px;
	min-height: 180px;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
`;
