import { cdnUrl } from "@/core/settings";
import { capitalizeFirst } from "../../utils/functions";

interface Props {
	team: string;
	name: string;
	role: string;
	date: string;
	cover: string;
	country: string;
}
export function StickerVertical({
	team,
	name,
	role,
	date,
	cover,
	country,
}: Props) {
	return (
		<div
			className="grid [grid-template-areas:'stack'] font-haettenschweiler w-full text-white"
			style={{
				aspectRatio: "200 / 280",
			}}
		>
			<Background team={team} />
			<Proplayer url={cover} />
			<InfoSticker
				team={team}
				name={name}
				role={role}
				date={date}
				country={country}
			/>
			<Decoration team={team} />
			<Frame />
		</div>
	);
}

interface BackgroundProps {
	team: string;
}

function Background({ team }: BackgroundProps) {
	return (
		<div
			className="[grid-area:stack] w-full h-full"
			style={{
				transform: "translateZ(0)",
				aspectRatio: "200 / 280",
			}}
		>
			<img
				src={`${cdnUrl}/albums/worlds2025/figuritas/backgrounds/${team.toLowerCase()}.${
					team.toUpperCase() === "T1" ? "svg" : "png"
				}`}
				className="object-contain w-full h-full"
				loading="lazy"
				decoding="async"
				width={200}
				height={280}
				alt="Fondo Figurita"
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
			className="[grid-area:stack] pt-6 pb-4 px-4 w-full h-full"
			style={{
				transform: "translateZ(1px)",
				aspectRatio: "200 / 280",
			}}
		>
			<img
				src={`${cdnUrl}${url}`}
				className="object-contain object-bottom w-full h-full"
				loading="lazy"
				decoding="async"
				width={200}
				height={280}
				alt="Figurita"
			/>
		</div>
	);
}

interface InfoStickerProps {
	team: string;
	name: string;
	role: string;
	date: string;
	country: string;
}

function InfoSticker({ team, name, role, date, country }: InfoStickerProps) {
	const getFontSize = () => {
		if (name.length > 9) return "text-xl leading-1";
		if (name.length > 5) return "text-2xl leading-1";
		return "text-4xl";
	};

	return (
		<div
			className="[grid-area:stack] flex items-end justify-between p-[10%] w-full h-full"
			style={{
				transform: "translateZ(2px)",
				aspectRatio: "200 / 280",
			}}
		>
			<div className="flex flex-col h-fit w-full">
				<div className="flex flex-col gap-3 w-full">
					<span className="ml-1">
						<img
							src={`${cdnUrl}/countries/flags/${country.toLowerCase()}.png`}
							className="object-contain w-[15%]"
							loading="lazy"
							decoding="async"
							alt={`Cover ${country}`}
						/>
					</span>
					<img
						src={`${cdnUrl}/albums/worlds2025/figuritas/logos/teams/${team.toLowerCase()}.svg`}
						className="object-contain w-[20%] max-h-8"
						loading="lazy"
						decoding="async"
						alt={`Cover ${team}`}
					/>
				</div>
				<div className="flex items-center justify-between h-fit w-full">
					<p
						className={`font-regular ${getFontSize()} text-white text-shadow-blue-500`}
					>
						{capitalizeFirst(name)}
					</p>
					<div className="flex flex-col items-center w-[15%] h-fit gap-0.5">
						<img
							src={`${cdnUrl}/albums/worlds2025/figuritas/logos/roles/${role.toLowerCase()}.svg`}
							className="object-contain w-full h-full"
							loading="lazy"
							decoding="async"
							alt="Support Role"
						/>
						<p className="font-regular text-xs text-white tracking-wider uppercase">
							{role}
						</p>
					</div>
				</div>
				<p className="font-regular text-base text-white">{date}</p>
			</div>
		</div>
	);
}

interface DecorationProps {
	team: string;
}

function Decoration({ team }: DecorationProps) {
	return (
		<div
			className="[grid-area:stack] w-full h-full"
			style={{
				transform: "translateZ(3px)",
			}}
		>
			<img
				src={`${cdnUrl}/albums/worlds2025/figuritas/decorations/${team.toLowerCase()}.svg`}
				className="object-contain w-full h-full"
				loading="lazy"
				decoding="async"
				width={200}
				height={280}
				alt="Marco Figurita"
			/>
		</div>
	);
}

function Frame() {
	return (
		<div
			className="[grid-area:stack] w-full h-full"
			style={{
				transform: "translateZ(4px)",
				aspectRatio: "200 / 280",
			}}
		>
			<img
				src={`${cdnUrl}/albums/worlds2025/figuritas/frames/vertical.svg`}
				className="object-contain w-full h-full"
				loading="lazy"
				decoding="async"
				width={200}
				height={280}
				alt="Figurita"
			/>
		</div>
	);
}
