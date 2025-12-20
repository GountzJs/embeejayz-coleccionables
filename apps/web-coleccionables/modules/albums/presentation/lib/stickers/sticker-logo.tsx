import { cdnUrl } from "@/core/settings";
import { BgBrillo } from "../background-brillo/bg-brillo";

interface Props {
	team: string;
}

export function StickerLogo({ team }: Props) {
	return (
		<div
			className="grid [grid-template-areas:'stack'] w-full font-haettenschweiler text-white"
			style={{
				aspectRatio: "200 / 280",
			}}
		>
			<Background />
			<Logo team={team} />
			<Decoration />
		</div>
	);
}

function Background() {
	return (
		<div
			className={`[grid-area:stack] relative w-full`}
			style={{
				transform: "translateZ(0)",
				aspectRatio: "200 / 280",
			}}
		>
			<BgBrillo
				url={`${cdnUrl}/albums/worlds2025/figuritas/frames/carta-dorada.svg`}
			/>
		</div>
	);
}

interface LogoProps {
	team: string;
}

function Logo({ team }: LogoProps) {
	return (
		<div
			className="[grid-area:stack] w-full"
			style={{
				transform: "translateZ(1px)",
				aspectRatio: "200 / 280",
			}}
		>
			<div className="flex items-center justify-center w-full h-full">
				<img
					src={`${cdnUrl}/albums/worlds2025/teams/logos/${team.toLowerCase()}.png`}
					className="object-contain max-w-[80%] max-h-[80%] m-auto drop-shadow-lg drop-shadow-black"
					loading="lazy"
					decoding="async"
					width={200}
					height={280}
					alt="Logo Figurita"
				/>
			</div>
		</div>
	);
}

function Decoration() {
	return (
		<div
			className="[grid-area:stack] h-full w-full"
			style={{
				transform: "translateZ(2px)",
			}}
		>
			<img
				src={`${cdnUrl}/albums/worlds2025/figuritas/decorations/logo.svg`}
				className="object-contain h-full w-full"
				loading="lazy"
				decoding="async"
				alt="Marco Figurita"
			/>
		</div>
	);
}
