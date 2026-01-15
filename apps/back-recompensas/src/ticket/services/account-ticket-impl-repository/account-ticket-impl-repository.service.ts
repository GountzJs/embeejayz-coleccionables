import { Injectable } from '@nestjs/common';
import prisma from '../../../db/client';

type Ticket =  {
    cover: string;
    name: string;
    hourMx: string;
    hourArg: string;
    date: string;
}

@Injectable()
export class AccountTicketImplRepositoryService {
    async getByUserId(userId: string): Promise<Ticket[]> {
        const tickets = await prisma.accountTicket.findMany({
            where: {
                accountId: userId
            },
            select: {
                ticket: {
                    select: {
                        cover: true,
                        name: true,
                        hourMx: true,
                        hourArg: true,
                        date: true
                    }
                }
            }
        });

        return tickets.map(accountTicket => accountTicket.ticket)
    }
}
