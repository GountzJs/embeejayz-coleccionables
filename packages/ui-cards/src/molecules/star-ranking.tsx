import styled from "styled-components";
import { StarIcon } from "../atoms/icons";

interface Props {
	quantity: number;
	color?: string;
}

const ListRanking = styled.ul`
	align-items: center;
	justify-content: center;
	display: flex;
	list-style: none;
	margin: 0;
	padding: 0;
	width: 100%;
	height: fit-content;
	margin-top: 50px;
`;

export function StarRanking({ quantity, color = "#e3092b" }: Props) {
	return (
		<ListRanking>
			{Array.from({ length: 5 }, (_, i) => i + 1).map((i) => (
				<li key={i}>
					<StarIcon
						size={18}
						isComplete={i <= quantity}
						color={color}
						style={{ display: "block" }}
					/>
				</li>
			))}
		</ListRanking>
	);
}
