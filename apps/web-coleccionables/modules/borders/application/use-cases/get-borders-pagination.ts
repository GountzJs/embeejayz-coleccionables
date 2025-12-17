import type {
	GetPaginationBordersRequest,
	GetPaginationBordersResponse,
} from "../../domain/interfaces/get-pagination-borders.interface";
import type { ApiBordersRepository } from "../../domain/repositories/api-borders.repository";

type GetBordersPagination = (
	request: GetPaginationBordersRequest,
) => Promise<GetPaginationBordersResponse>;

export function getBordersPagination(
	apiBordersRepository: ApiBordersRepository,
): GetBordersPagination {
	return ({ id, page, orderBy, sort, name }: GetPaginationBordersRequest) =>
		apiBordersRepository.getPagination({ id, page, orderBy, sort, name });
}
