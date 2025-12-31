/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

export const getStickersAdapter = (
  page: number,
  totalPages: number,
  totalItems: number,
  items: any[],
) => ({
  page,
  total: {
    pages: totalPages,
    items: totalItems,
  },
  data: items.map((item) => ({
    quantity: item.quantity,
    date: item.sticker.date,
    name: item.sticker.name,
    cover: item.sticker.cover,
    country: item.sticker.country.name,
    team: item.sticker.team.name,
    role: item.sticker.lolRole.name,
    type: item.sticker.stickerType.name,
  })),
});
