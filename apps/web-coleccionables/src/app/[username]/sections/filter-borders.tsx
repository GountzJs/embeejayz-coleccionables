import { SearchBorders } from "@modules/borders/presentation/components/search-borders/search-borders";
import { useGetBorderFilters } from "@modules/borders/presentation/hooks/get-border-filters";

export function FilterBorders() {
	const { sort, orderBy, name } = useGetBorderFilters();

	return (
		<div className="flex items-center gap-4 w-full">
			<SearchBorders sort={sort} orderBy={orderBy} name={name} />
		</div>
	);
}
