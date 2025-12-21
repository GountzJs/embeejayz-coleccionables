import type {
	GetPaginationBordersRequest,
	GetPaginationBordersResponse,
} from "../../domain/interfaces/get-pagination-borders.interface";
import type { BordersRepository } from "../../domain/repositories/borders.repository";

type GetBordersPagination = (
	request: GetPaginationBordersRequest,
) => Promise<GetPaginationBordersResponse>;

export function getBordersPagination(
	bordersRepository: BordersRepository,
): GetBordersPagination {
	return ({ id, page, orderBy, sort, name }: GetPaginationBordersRequest) =>
		bordersRepository.getPagination({ id, page, orderBy, sort, name });
}
