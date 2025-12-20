import json from "@/assets/data/stickers.json";
import { useStickersContext } from "../../contexts/stickers.context";
import { StickerCover } from "../stickers/sticker-cover";
import { StickerHorizontal } from "../stickers/sticker-horizontal";
import { StickerLogo } from "../stickers/sticker-logo";
import { StickerVertical } from "../stickers/sticker-vertical";

export function PageGEN() {
	const { stickers, isLoading } = useStickersContext();
	const genStickers = json["gen"].filter((sticker) =>
		stickers.some((id) => sticker.id === id),
	);
	const logo = genStickers.find((sticker) => sticker.role === "LOGO");
	const coach = genStickers.find((sticker) => sticker.role === "COACH");
	const team = genStickers.find((sticker) => sticker.role === "TEAM");

	return (
		<div
			className="flex flex-col items-center justify-center py-2 px-4 gap-8 w-full h-full"
			style={{
				backgroundImage: "url('/pages/t1/front.jpg')",
				backgroundSize: "contain",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div className="flex items-center justify-center flex-wrap gap-4 h-fit w-full">
				<StickerCover width="40%" variant="VERTICAL" aspectRatio="200 / 280">
					{isLoading ? <>Buscando figuritas...</> : <></>}
					{!isLoading && logo && <StickerLogo team="GEN" />}
				</StickerCover>
				<StickerCover width="40%" variant="VERTICAL" aspectRatio="200 / 280">
					{isLoading && <></>}
					{!isLoading && coach && (
						<StickerVertical
							team={coach.team!}
							name={coach.name!}
							role={coach.role!}
							date={coach.date!}
							cover={coach.cover}
							country={coach.country!}
						/>
					)}
				</StickerCover>
			</div>
			<div className="flex items-center justify-center gap-4 h-fit w-full">
				<StickerCover width="55%" variant="HORIZONTAL" aspectRatio="350 / 250">
					{isLoading && <></>}
					{!isLoading && team && (
						<StickerHorizontal
							team={team.team!}
							cover={team.cover}
							name={team.name!}
						/>
					)}
				</StickerCover>
			</div>
		</div>
	);
}

export function PageGENBack() {
	const { stickers, isLoading } = useStickersContext();
	const genStickers = json["gen"].filter((sticker) =>
		stickers.some((id) => sticker.id === id),
	);
	const proplayers = genStickers.filter(
		(sticker) =>
			sticker.role !== "TEAM" &&
			sticker.role !== "LOGO" &&
			sticker.role !== "COACH",
	);

	return (
		<div
			className="flex flex-col items-center justify-center py-2 gap-8 w-full h-full"
			style={{
				backgroundImage: "url('/pages/t1/back.jpg')",
				backgroundSize: "contain",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div className="flex items-center justify-center flex-wrap gap-1 h-fit w-full">
				<StickerCover width="30%" variant="VERTICAL" aspectRatio="200 / 280">
					{isLoading ? <>Buscando figuritas...</> : <></>}
					{!isLoading && proplayers[0] && (
						<StickerVertical
							team={proplayers[0].team!}
							name={proplayers[0].name!}
							role={proplayers[0].role!}
							date={proplayers[0].date!}
							cover={proplayers[0].cover!}
							country={proplayers[0].country!}
						/>
					)}
				</StickerCover>
				<StickerCover width="30%" variant="VERTICAL" aspectRatio="200 / 280">
					{isLoading ? <>Buscando figuritas...</> : <></>}
					{!isLoading && proplayers[1] && (
						<StickerVertical
							team={proplayers[1].team!}
							name={proplayers[1].name!}
							role={proplayers[1].role!}
							date={proplayers[1].date!}
							cover={proplayers[1].cover!}
							country={proplayers[1].country!}
						/>
					)}
				</StickerCover>
				<StickerCover width="30%" variant="VERTICAL" aspectRatio="200 / 280">
					{isLoading ? <>Buscando figuritas...</> : <></>}
					{!isLoading && proplayers[2] && (
						<StickerVertical
							team={proplayers[2].team!}
							name={proplayers[2].name!}
							role={proplayers[2].role!}
							date={proplayers[2].date!}
							cover={proplayers[2].cover!}
							country={proplayers[2].country!}
						/>
					)}
				</StickerCover>
			</div>
			<div className="flex items-center justify-center flex-wrap gap-2 h-fit w-full">
				<StickerCover width="30%" variant="VERTICAL" aspectRatio="200 / 280">
					{isLoading ? <>Buscando figuritas...</> : <></>}
					{!isLoading && proplayers[3] && (
						<StickerVertical
							team={proplayers[3].team!}
							name={proplayers[3].name!}
							role={proplayers[3].role!}
							date={proplayers[3].date!}
							cover={proplayers[3].cover!}
							country={proplayers[3].country!}
						/>
					)}
				</StickerCover>
				<StickerCover width="30%" variant="VERTICAL" aspectRatio="200 / 280">
					{isLoading ? <>Buscando figuritas...</> : <></>}
					{!isLoading && proplayers[4] && (
						<StickerVertical
							team={proplayers[4].team!}
							name={proplayers[4].name!}
							role={proplayers[4].role!}
							date={proplayers[4].date!}
							cover={proplayers[4].cover!}
							country={proplayers[4].country!}
						/>
					)}
				</StickerCover>
			</div>
		</div>
	);
}
