import { useState } from "react";
import { Rank, type TRank } from "../../domain/consts/rank.enum";
import type { TotalRankingEntity } from "../../domain/entities/total-ranking.entity";
import { useGetAllRankingQuery } from "../queries/get-all-ranking.query";
import { getColorRank, getGradientRank, getRankByIndex } from "../utils/ranks";
import { IconRank } from "./icon-rank";
import { SkeletonRanking } from "./skeleton-ranking";

export function ListRanking() {
	const { data, isLoading, error } = useGetAllRankingQuery();

	if (isLoading) {
		return <SkeletonRanking />;
	}

	if (error || !data?.length) {
		return <div>No se pudo recuperar el ranking</div>;
	}

	return (
		<ul className="flex flex-col items-center gap-10 w-[700px] max-w-3/4">
			{data.map((ranking, idx) => (
				<UserRank
					key={ranking.id}
					rank={getRankByIndex(idx)}
					username={ranking.username}
					total={ranking.total}
				/>
			))}
		</ul>
	);
}

type UserProps = {
	rank: TRank;
	username: string;
	total: TotalRankingEntity;
};

function UserRank({ rank, username, total }: UserProps) {
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
					height={rank === Rank.Unranked ? 55 : 70}
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
