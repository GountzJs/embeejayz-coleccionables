/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import prisma from '../../../db/client';
import { Order } from '../../models/enums/order.enum';
import { Sort } from '../../models/enums/sort.enum';

@Injectable()
export class AccountBorderImplRepositoryService {
  private getSortOrder(sort: Sort): 'asc' | 'desc' {
    return sort.toLowerCase() as 'asc' | 'desc';
  }

  async findByUserId(
    userId: string,
    page: number,
    sort: Sort,
    name?: string,
    orderBy?: Order,
  ) {
    const limit = 10;
    const offset = (page - 1) * limit;

    const where: any = {
      accountId: userId,
      ...(name && {
        border: { name: { contains: name } },
      }),
    };

    let orderConfig: any[];

    if (orderBy === Order.CreatedAt) {
      orderConfig = [{ updatedAt: this.getSortOrder(sort) }];
    } else {
      orderConfig = [
        { border: { isSpecial: this.getSortOrder(sort) } },
        { quantity: this.getSortOrder(sort) },
        { updatedAt: this.getSortOrder(sort) },
      ];
    }

    const [items, total] = await Promise.all([
      prisma.accountBorder.findMany({
        where,
        include: { border: true },
        orderBy: orderConfig,
        skip: offset,
        take: limit,
      }),
      prisma.accountBorder.count({ where }),
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
      page,
      totalPages,
      totalItems: total,
      items,
    };
  }
}
