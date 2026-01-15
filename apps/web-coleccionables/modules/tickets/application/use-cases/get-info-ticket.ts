import type { InfoTicketEntity } from "../../domain/entities/info-ticket.entity";
import type { TicketRepository } from "../../domain/repositories/ticket.repository";

type GetAllTicketsResponse = (username: string) => Promise<InfoTicketEntity>;

export function getInfoTicket(
	apiTicketsRepository: TicketRepository,
): GetAllTicketsResponse {
	return (username: string) => apiTicketsRepository.getInfo(username);
}
