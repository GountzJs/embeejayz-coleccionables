import type { Worlds2025Repository } from "../../domain/worlds2025.repository";

type GetEmbeeCardPagination = (id: string) => Promise<string[]>;

export function getStickersUseCase(
	wrolds2025Repository: Worlds2025Repository,
): GetEmbeeCardPagination {
	return (id: string) => {
		return wrolds2025Repository.getStickers(id);
	};
}
