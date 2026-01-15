import type { InfoTicketEntity } from "../entities/info-ticket.entity";
import type { TicketEntity } from "../entities/ticket.entity";

export interface TicketRepository {
	getAll(id: string): Promise<TicketEntity[]>;
	getInfo(username: string): Promise<InfoTicketEntity>;
}
