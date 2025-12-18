import type {
	TBorderSort,
	TBordersOrderBy,
} from "@modules/borders/domain/consts/borders.const";
import { SearchBorders } from "@modules/borders/presentation/components/search-borders/search-borders";
import { useLocation } from "react-router";

export function FilterBorders() {
	const { search } = useLocation();
	const params = new URLSearchParams(search);
	const sort = params.get("sort") as TBorderSort;
	const orderBy = params.get("orderBy") as TBordersOrderBy;
	const name = params.get("name") || "";

	return (
		<div className="flex items-center gap-4 w-full">
			<SearchBorders sort={sort} orderBy={orderBy} name={name} />
		</div>
	);
}
