import { cdnUrl } from "@/core/settings";

interface Props {
	points: string;
	detail: string;
	color?: string;
}

export function BoxPoints({
	points,
	detail,
	color = "rgb(0, 245, 147)",
}: Props) {
	return (
		<div className="bg-[#222222] rounded-md items-center flex flex-col justify-center gap-2.5 px-1 py-1.5 w-fit">
			<div
				className="relative items-center rounded-md flex justify-center w-[93px] h-[93px]"
				style={{ backgroundColor: color }}
			>
				<img
					src={`${cdnUrl}/images/icons/points.png`}
					alt="Twitch Points"
					width={35}
					height={35}
					loading="lazy"
					decoding="async"
				/>
				<p className="bg-[rgba(0,0,0,0.4)] absolute left-1/2 -translate-x-1/2 bottom-1 flex items-center justify-center gap-0.5 py-0.5 px-1 rounded-md text-xs text-wrap">
					{/** biome-ignore lint/a11y/noSvgWithoutTitle: Any */}
					<svg fill="#ffd37a" width="16" height="16" viewBox="0 0 20 20">
						<path d="M10 6a4 4 0 0 1 4 4h-2a2 2 0 0 0-2-2V6z"></path>
						<path
							fillRule="evenodd"
							d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-2 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0z"
							clipRule="evenodd"
						></path>
					</svg>
					{points}
				</p>
			</div>
			<p className="text-center font-regular text-xs text-wrap w-[120px]">
				{detail}
			</p>
		</div>
	);
}
