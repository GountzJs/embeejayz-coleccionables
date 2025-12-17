import type { TBorderSort, TBordersOrderBy } from "../consts/borders.const";
import type { BorderEntity } from "../entities/boder.entity";
import type { TotalBorderEntity } from "../entities/total-border.entity";

export interface GetPaginationBordersRequest {
	id: string;
	page?: number;
	orderBy?: TBordersOrderBy;
	sort?: TBorderSort;
	name?: string;
}

export interface GetPaginationBordersResponse {
	actualPage: string;
	items: BorderEntity[];
	total: TotalBorderEntity;
}
