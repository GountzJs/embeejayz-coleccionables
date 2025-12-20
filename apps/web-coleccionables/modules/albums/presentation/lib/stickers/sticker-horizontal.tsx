import { cdnUrl } from "@/core/settings";

interface Props {
	team: string;
	cover: string;
	name: string;
}

export function StickerHorizontal({ team, cover, name }: Props) {
	return (
		<div
			className="grid [grid-template-areas:'stack'] w-full font-haettenschweiler text-white overflow-hidden"
			style={{ aspectRatio: "350 / 250" }}
		>
			<Background team={team} />
			<Proplayer url={cover} />
			<Frame />
			<InfoSticker name={name} />
		</div>
	);
}

interface BackgroundProps {
	team: string;
}

function Background({ team }: BackgroundProps) {
	return (
		<div
			className="[grid-area:stack] w-full"
			style={{
				transform: "translateZ(0)",
				aspectRatio: "350 / 250",
			}}
		>
			<img
				src={`${cdnUrl}/albums/worlds2025/figuritas/backgrounds-horizontal/${team.toLowerCase()}.${
					team.toUpperCase() === "T1" ? "svg" : "png"
				}`}
				className="object-cover"
				loading="lazy"
				decoding="async"
				alt="Figurita"
				width={350}
				height={250}
				style={{ aspectRatio: "350 / 250" }}
			/>
		</div>
	);
}

interface ProplayerProps {
	url: string;
}

function Proplayer({ url }: ProplayerProps) {
	return (
		<div
			className="[grid-area:stack] px-4 overflow-hidden w-full"
			style={{
				transform: "translateZ(1px)",
				aspectRatio: "350 / 250",
			}}
		>
			<img
				src={`${cdnUrl}${url}`}
				className="object-contain w-full"
				loading="lazy"
				decoding="async"
				alt="Figurita"
				width={300}
				height={250}
				style={{ aspectRatio: "300 / 250" }}
			/>
		</div>
	);
}

function Frame() {
	return (
		<div
			className="[grid-area:stack] w-full"
			style={{
				transform: "translateZ(2px)",
				aspectRatio: "350 / 250",
			}}
		>
			<img
				src={`${cdnUrl}/albums/worlds2025/figuritas/frames/horizontal.svg`}
				className="object-cover"
				loading="lazy"
				decoding="async"
				alt="Figurita"
				width={350}
				height={250}
				style={{ aspectRatio: "350 / 250" }}
			/>
		</div>
	);
}

interface InfoStickerProps {
	name: string;
}

function InfoSticker({ name }: InfoStickerProps) {
	return (
		<div
			className="[grid-area:stack] flex items-end justify-between w-full overflow-hidden"
			style={{
				transform: "translateZ(3px)",
				aspectRatio: "350 / 250",
			}}
		>
			<p
				className="font-regular font-stretch-extra-expanded text-3xl text-white relative left-1/2 bottom-0"
				style={{
					transform: "translate(-50%, -40%)",
				}}
			>
				{name}
			</p>
		</div>
	);
}
