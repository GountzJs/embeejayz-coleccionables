// biome-ignore assist/source/organizeImports: Autosave import
import { cdnUrl } from "@/consts/settings";
import type { EmbeecardEntity } from "@embeejayz/core-cards";
import { CardElement } from "@embeejayz/ui-cards";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { BackgroundEmbeecard } from "../background-embeecard/background-embeecard";
import { CardFlipped } from "../card-flipped/card-flipped";

const Button = styled.button`
	background: transparent;
	border: none;
	cursor: pointer;
	margin: 0;
	padding: 0;
	transform-origin: right bottom;
`;

interface Props extends EmbeecardEntity {
	isDisabled?: boolean;
	onFlip: () => void;
	changeToOpen: () => void;
}

export function ViewEmbeecard({
	isDisabled = false,
	onFlip,
	changeToOpen,
	...props
}: Props) {
	const btnRef = useRef<HTMLButtonElement | null>(null);
	const [showCard, setShowCard] = useState(false);
	const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

	useEffect(() => {
		return () => {
			if (timer) {
				clearTimeout(timer);
			}
		};
	}, [timer]);

	const animateCard = () => {
		if (!btnRef.current) return;
		btnRef.current.animate(
			[
				{ transform: "rotate(0)" },
				{
					transform: "rotate(20deg)",
				},
				{ transform: "rotate(0)" },
			],
			{
				duration: 1200,
				easing: "ease-in-out",
			},
		);
	};

	const handleCardLogic = () => {
		if (showCard) {
			animateCard();
			const newTimer = setTimeout(() => {
				onFlip();
			}, 600);
			setTimer(newTimer);
			changeToOpen();
			return;
		}
		setShowCard(true);
	};

	return (
		<Button
			ref={btnRef}
			type="button"
			disabled={isDisabled}
			onClick={handleCardLogic}
		>
			<CardFlipped
				front={<CardElement cdnUrl={cdnUrl} {...props} />}
				back={<BackgroundEmbeecard />}
				showCard={showCard}
			/>
		</Button>
	);
}
