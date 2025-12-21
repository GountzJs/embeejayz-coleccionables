import {
	type AccountRankingEntity,
	rank as rankConsts,
} from "@embeejayz/core-accounts";
import { useState } from "react";
import { getColorRank, getGradientRank } from "../utils/ranks";
import { IconRank } from "./icon-rank";

export function UserRank({ rank, username, total }: AccountRankingEntity) {
	const [isHover, setIsHover] = useState(false);

	return (
		<li
			className={`flex items-center h-[94px] p-1.5 rounded-md w-full transition-all will-change-transform ${
				isHover ? "scale-105" : ""
			}`}
			style={{ background: getGradientRank(rank) }}
		>
			<a
				href={`/usuarios/${username.toLowerCase()}`}
				className="bg-gray-ultra-dark rounded-md flex items-center px-4 py-2 w-full h-full"
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
			>
				<IconRank
					rank={rank}
					width={70}
					height={rank === rankConsts.unranked ? 55 : 70}
				/>
				<div
					className="rounded-sm w-2.5 h-[70px] my-2 mx-6"
					style={{ backgroundColor: getColorRank(rank) }}
				></div>
				<p className="text-center text-2xl font-medium w-full">{username}</p>
				<div className="flex items-center font-medium h-full gap-10 w-fit">
					<div className="flex flex-col gap-1 items-center justify-center">
						<p className="text-3xl">{total.borders}</p>
						<p className="text-sm font-regular">Bordes</p>
					</div>
					<div className="flex flex-col gap-1 items-center justify-center">
						<p className="text-3xl">{total.cards}</p>
						<p className="text-sm font-regular">Cartas</p>
					</div>
				</div>
			</a>
		</li>
	);
}
