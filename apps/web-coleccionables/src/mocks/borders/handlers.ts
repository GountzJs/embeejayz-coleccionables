import {
	borderSort,
	bordersOrderBy,
	type TBorderSort,
	type TBordersOrderBy,
} from "@modules/borders/domain/consts/borders.const";
import type { BorderEntity } from "@modules/borders/domain/entities/border.entity";
import type { TotalBorderEntity } from "@modules/borders/domain/entities/total-border.entity";
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
			const name = url.searchParams.get("name") || "";
			const { items, total } = getBorders(sort, orderBy, page, name);
			return HttpResponse.json({
				items,
				actualPage: page,
				total,
			});
		},
	),
];

type GetBordersResponse = {
	items: BorderEntity[];
	total: TotalBorderEntity;
};

function getBorders(
	sort: TBorderSort,
	orderBy: TBordersOrderBy,
	page: number,
	name: string,
): GetBordersResponse {
	const filteredData = borders.filter((border) =>
		border.name.toLowerCase().includes(name.toLowerCase()),
	);
	const limit = 8;

	if (orderBy === bordersOrderBy.rank) {
		const sortedData = [...filteredData].sort((a, b) => {
			if (sort === borderSort.desc) {
				if (a.isSpecial && !b.isSpecial) return -1;
				if (!a.isSpecial && b.isSpecial) return 1;
				return b.quantity - a.quantity;
			}

			if (a.isSpecial && !b.isSpecial) return 1;
			if (!a.isSpecial && b.isSpecial) return -1;
			return a.quantity - b.quantity;
		});

		const paginatedData = sortedData.slice((page - 1) * limit, page * limit);
		return {
			items: paginatedData,
			total: {
				items: sortedData.length,
				pages: Math.ceil(sortedData.length / limit),
			},
		};
	}

	const sortedData = [...filteredData].sort((a, b) => {
		if (sort === borderSort.desc) {
			return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
		}
		return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
	});

	const paginatedData = sortedData.slice((page - 1) * limit, page * limit);

	return {
		items: paginatedData,
		total: {
			items: sortedData.length,
			pages: Math.ceil(sortedData.length / limit),
		},
	};
}
