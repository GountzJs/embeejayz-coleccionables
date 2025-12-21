import styled from "styled-components";

const Container = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding-bottom: 10px;
	max-height: 450px;
	max-width: 300px;
	height: 100%;
	width: 100%;
`;

const Text = styled.p`
	user-select: none;
	color: #fff;
	font-weight: 500;
	font-size: 0.75rem;
	font-family: var(--font-montserrat);
	text-shadow: 0 0 2px #000;
	padding: 0;
	line-height: 1;
	margin: 0;
`;

interface Props {
	identifier: string;
}

export function CardNumber({ identifier }: Props) {
	return (
		<Container>
			<Text>#{identifier}</Text>
		</Container>
	);
}
