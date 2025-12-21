import {
	borderSort,
	bordersOrderBy,
	type TBorderSort,
	type TBordersOrderBy,
} from "@embeejayz/core-borders";
import { useLocation } from "react-router";

export function useGetBorderFilters() {
	const { search } = useLocation();
	const params = new URLSearchParams(search);
	const sort = (params.get("sort") as TBorderSort) || borderSort.desc;
	const orderBy =
		(params.get("orderBy") as TBordersOrderBy) || bordersOrderBy.rank;
	const name = params.get("name") || "";

	return {
		sort,
		orderBy,
		name,
	};
}
