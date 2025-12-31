import { Injectable } from '@nestjs/common';
import prisma from '../../../db/client';
import { GetEmbeecardResponse } from '../../models/interfaces/get-embeecard-response.interface';

@Injectable()
export class AccountEmbeecardImplRepositoryService {
  async findByUserId(
    userId: string,
    page: number,
  ): Promise<{
    page: number;
    totalPages: number;
    totalItems: number;
    items: GetEmbeecardResponse[];
  }> {
    const limit = 10;
    const offset = (page - 1) * limit;

    const [items, total] = await Promise.all([
      prisma.accountEmbeecard.findMany({
        where: { accountId: userId },
        include: {
          embeecard: {
            include: {
              category: true,
            },
          },
        },
        orderBy: [{ updatedAt: 'desc' }],
        skip: offset,
        take: limit,
      }),
      prisma.accountEmbeecard.count({
        where: { accountId: userId },
      }),
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
      page,
      totalPages,
      totalItems: total,
      items,
    };
  }

  async findLastCardsByQuantity(
    quantity: number,
    ref: string,
  ): Promise<GetEmbeecardResponse[]> {
    const accountId = await prisma.account.findUnique({
      where: {
        ref,
      },
    });
    if (!accountId) {
      throw new Error('Account not found');
    }
    return prisma.accountEmbeecard.findMany({
      where: {
        accountId: accountId.id,
      },
      include: {
        embeecard: {
          include: {
            category: true,
          },
        },
      },
      orderBy: [{ updatedAt: 'desc' }],
      take: quantity,
    });
  }
}
