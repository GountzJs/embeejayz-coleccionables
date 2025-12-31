import { Injectable } from '@nestjs/common';
import prisma from 'src/db/client';

@Injectable()
export class AccountStickerImplRepositoryService {
  async findByUserId(userId: string, page: number) {
    const limit = 10;
    const offset = (page - 1) * limit;

    const [items, total] = await Promise.all([
      prisma.accountSticker.findMany({
        where: { accountId: userId },
        include: {
          sticker: {
            include: {
              country: true,
              team: true,
              stickerType: true,
              lolRole: true,
            },
          },
        },
        orderBy: [
          { sticker: { stickerType: { orden: 'asc' } } },
          { sticker: { team: { name: 'asc' } } },
          { updatedAt: 'desc' },
        ],
        skip: offset,
        take: limit,
      }),
      prisma.accountSticker.count({
        where: { accountId: userId },
      }),
    ]);

    return {
      page,
      totalPages: Math.ceil(total / limit),
      totalItems: total,
      items,
    };
  }

  async findStickerIdsByUserId(userId: string) {
    const accountStickers = await prisma.accountSticker.findMany({
      where: { accountId: userId },
      select: {
        stickerId: true,
      },
    });

    return accountStickers.map((item) => item.stickerId);
  }
}
