import { useGetAllRankingQuery } from "../queries/get-all-ranking.query";
import { getRankByIndex } from "../utils/ranks";
import { SkeletonRanking } from "./skeleton-ranking";
import { UserRank } from "./user-rank";

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
				<UserRank key={ranking.id} {...ranking} rank={getRankByIndex(idx)} />
			))}
		</ul>
	);
}
