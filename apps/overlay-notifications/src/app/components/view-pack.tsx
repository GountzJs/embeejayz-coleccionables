import { type ReactNode, useEffect, useRef } from "react";
import styled from "styled-components";
import { usePacksContext } from "../contexts/packs/packs.context";
import { AnimatePack } from "./animate-pack/animate-pack";
import { ListEmbeecards } from "./list-embeecards/list-embeecards";

const Container = styled.div`
	position: absolute;
	top: 0;
	left: 50%;
	width: fit-content;
	height: fit-content;
	display: grid;
	grid-template-columns: 1fr;
    grid-template-rows: 1fr;
	z-index: 1;

	& > * {
		grid-column: 1;
		grid-row: 1;
	}
`;

interface Props {
	children: ReactNode;
}

function MoveContainer({ children }: Props) {
	const containerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!containerRef.current) return;
		containerRef.current?.animate(
			[
				{ transform: "translate(-50%, -100%)" },
				{ transform: "translate(-50%, 50%)" },
			],
			{
				duration: 800,
				easing: "ease-in-out",
				fill: "forwards",
			},
		);
	}, []);

	return <Container ref={containerRef}>{children}</Container>;
}

export function ViewPack() {
	const { packSelected } = usePacksContext();

	if (!packSelected) return null;

	return (
		<MoveContainer>
			<ListEmbeecards cards={packSelected.cards} />
			<AnimatePack />
		</MoveContainer>
	);
}
