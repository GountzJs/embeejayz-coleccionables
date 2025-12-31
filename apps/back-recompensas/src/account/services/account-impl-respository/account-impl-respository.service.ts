import { Injectable } from '@nestjs/common';
import { Account } from '@prisma/client';
import prisma from '../../../db/client';
import { AccountNotFoundException } from '../../errors/account-not-found.error';
import { AccountNotRegisterException } from '../../errors/account-not-register.error';
import { Ranking } from '../../models/types/ranking.type';
import { Total } from '../../models/types/total.type';

@Injectable()
export class AccountImplRepositoryService {
  async findOne(ref: string): Promise<Account> {
    const account = await prisma.account.findUnique({ where: { ref } });

    if (!account) {
      throw new AccountNotRegisterException();
    }

    return account;
  }

  async findRewards(id: string): Promise<{ total: Total }> {
    const account = await prisma.account.findUnique({
      where: { id },
      include: {
        accountBorders: { select: { quantity: true } },
        accountEmbeecards: { select: { quantity: true } },
      },
    });

    if (!account) throw new AccountNotFoundException();

    const borders = account.accountBorders.reduce(
      (sum, ab) => sum + ab.quantity,
      0,
    );
    const cards = account.accountEmbeecards.reduce(
      (sum, ae) => sum + ae.quantity,
      0,
    );

    return {
      total: {
        borders,
        cards,
        general: borders + cards,
      },
    };
  }

  async getRanking(): Promise<Ranking[]> {
    const results = await prisma.$queryRaw<
      {
        user_id: string;
        ref: string;
        total_borders: string;
        total_cards: string;
      }[]
    >`
    SELECT
      a.id AS user_id,
      a.ref, COALESCE(b.total_borders, 0) AS total_borders,
      COALESCE(c.total_cards, 0) AS total_cards
      FROM
        accounts a
      LEFT JOIN ( SELECT account_id, SUM(quantity) AS total_borders
      FROM account_borders GROUP BY account_id ) b
      ON b.account_id = a.id
      LEFT JOIN ( SELECT account_id, SUM(quantity) AS total_cards
      FROM account_embeecards GROUP BY account_id ) c
      ON c.account_id = a.id WHERE a.is_staff = FALSE
      ORDER BY (COALESCE(b.total_borders, 0) + COALESCE(c.total_cards, 0))
      DESC LIMIT 8;
  `;

    return results.map((r) => ({
      id: r.user_id,
      ref: r.ref,
      total: {
        borders: Number(r.total_borders),
        cards: Number(r.total_cards),
      },
    }));
  }
}
