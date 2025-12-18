import {
	borderSort,
	bordersOrderBy,
	type TBorderSort,
	type TBordersOrderBy,
} from "@modules/borders/domain/consts/borders.const";
import { HttpResponse, http } from "msw";
import { borders } from "./data";

export const handlers = [
	http.get(
		"http://localhost:4200/api/borders/users/:username",
		({ request }) => {
			const url = new URL(request.url);
			const page = Number(url.searchParams.get("page") || 1);
			const sort = url.searchParams.get("sort") as TBorderSort;
			const orderBy = url.searchParams.get("orderBy") as TBordersOrderBy;
			const data = getBorders(sort, orderBy, page);
			return HttpResponse.json({
				items: data,
				actualPage: 1,
				total: {
					count: 8,
					pages: 1,
				},
			});
		},
	),
];

function getBorders(sort: TBorderSort, orderBy: TBordersOrderBy, page: number) {
	const limit = 8;
	if (orderBy === bordersOrderBy.rank) {
		if (sort === borderSort.desc) {
			const data = borders.sort((a, b) => {
				if (a.isSpecial && !b.isSpecial) return -1;
				if (!a.isSpecial && b.isSpecial) return 1;

				return b.quantity - a.quantity;
			});
			const paginatedData = data.slice((page - 1) * limit, page * limit);
			return paginatedData;
		}
		const data = borders.sort((a, b) => {
			if (a.isSpecial && !b.isSpecial) return -1;
			if (!a.isSpecial && b.isSpecial) return 1;
			return a.quantity - b.quantity;
		});
		const paginatedData = data.slice((page - 1) * limit, page * limit);
		return paginatedData;
	}
	const data = borders.sort((a, b) => {
		return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
	});
	const paginatedData = data.slice((page - 1) * limit, page * limit);
	return paginatedData;
}
