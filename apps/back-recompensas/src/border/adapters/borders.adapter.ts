import { BordersResponse } from '../models/interfaces/borders-response.interface';

export const bordersAdapter = (params: BordersResponse) => {
  return {
    actualPage: params.page,
    total: {
      pages: params.totalPages,
      items: params.totalItems,
    },
    items: params.items.map((item) => ({
      createdAt: item.border.createdAt,
      name: item.border.name,
      cover: item.border.cover,
      isSpecial: item.border.isSpecial,
      quantity: item.quantity,
    })),
  };
};
