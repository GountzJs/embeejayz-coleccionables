import type { TicketEntity } from "../entities/ticket.entity";

export interface TicketRepository {
	getAll(id: string): Promise<TicketEntity[]>;
}
