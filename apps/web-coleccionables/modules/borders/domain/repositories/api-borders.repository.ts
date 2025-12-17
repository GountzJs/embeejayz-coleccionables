import type {
	GetPaginationBordersRequest,
	GetPaginationBordersResponse,
} from "../interfaces/get-pagination-borders.interface";

export interface ApiBordersRepository {
	getPagination({
		id,
		page,
		orderBy,
		sort,
		name,
	}: GetPaginationBordersRequest): Promise<GetPaginationBordersResponse>;
}
