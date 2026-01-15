import type { TicketEntity } from "../../domain/entities/ticket.entity";
import type { TicketRepository } from "../../domain/repositories/ticket.repository";

type GetAllTicketsResponse = (id: string) => Promise<TicketEntity[]>;

export function getAllTickets(
	apiTicketsRepository: TicketRepository,
): GetAllTicketsResponse {
	return (id: string) => apiTicketsRepository.getAll(id);
}
