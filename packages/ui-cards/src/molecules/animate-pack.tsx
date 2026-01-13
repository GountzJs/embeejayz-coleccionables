import { useEffect, useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	height: 490px;
	width: 310px;
	position: relative;
	z-index: 999;
`;

const SobreBottom = styled.div`
	position: absolute;
	left: 0;
	top: 69px;
`;

const SobreTop = styled.div`
	position: absolute;
	left: 0;
	top: 0;
`;

interface Props {
	cdnUrl: string;
}

export function AnimatePack({ cdnUrl }: Props) {
	const imgRef = useRef<HTMLImageElement | null>(null);
	const sobreTopRef = useRef<HTMLDivElement | null>(null);
	const sobreBottomRef = useRef<HTMLDivElement | null>(null);
	const containerRef = useRef<HTMLDivElement | null>(null);

	const rotateSobreTop = () => {
		imgRef.current?.animate(
			[{ transform: "rotate(0deg)" }, { transform: "rotate(-20deg)" }],
			{
				duration: 600,
				easing: "ease-in-out",
				fill: "forwards",
			},
		);
	};

	const moveSobreTop = () => {
		sobreTopRef.current?.animate(
			[{ transform: "translateY(0)" }, { transform: "translateY(-100dvh)" }],
			{
				duration: 800,
				easing: "ease-in-out",
				fill: "forwards",
			},
		);
	};

	const moveSobreBottom = () => {
		sobreBottomRef.current?.animate(
			[{ transform: "translateY(0)" }, { transform: "translateY(100dvh)" }],
			{
				duration: 800,
				easing: "ease-in-out",
				fill: "forwards",
			},
		);
	};

	const removeInteractionContainer = () => {
		if (containerRef.current) {
			containerRef.current.animate([{ opacity: "1" }, { opacity: "0" }], {
				duration: 1000,
				easing: "ease-in-out",
				fill: "forwards",
			});
			containerRef.current.style.pointerEvents = "none";
		}
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: dasdas
	useEffect(() => {
		if (!imgRef.current || !sobreTopRef.current || !sobreBottomRef.current)
			return;

		const timers: NodeJS.Timeout[] = [];

		timers.push(setTimeout(() => rotateSobreTop(), 800));

		timers.push(
			setTimeout(() => {
				moveSobreTop();
				moveSobreBottom();
				removeInteractionContainer();
			}, 1400),
		);

		return () => {
			timers.map((timer) => clearTimeout(timer));
		};
	}, [imgRef, sobreTopRef, sobreBottomRef]);

	return (
		<Container ref={containerRef}>
			<SobreBottom ref={sobreBottomRef}>
				<img
					src={`${cdnUrl}/images/cards/sobre-body.png`}
					alt="Sobre cuerpo sobre"
					width={310}
					height={416}
					style={{ aspectRatio: "310/416" }}
				/>
			</SobreBottom>
			<SobreTop ref={sobreTopRef}>
				<img
					ref={imgRef}
					src={`${cdnUrl}/images/cards/sobre-top.png`}
					alt="Sobre cuerpo top"
					width={310}
					height={106}
					style={{
						aspectRatio: "310/106",
						position: "absolute",
						left: "0px",
						top: "0px",
						transformOrigin: "bottom left",
					}}
				/>
			</SobreTop>
		</Container>
	);
}
