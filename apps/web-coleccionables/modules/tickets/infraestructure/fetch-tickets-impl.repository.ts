import type { TicketEntity } from "../domain/entities/ticket.entity";
import type { TicketRepository } from "../domain/repositories/ticket.repository";

export class FetchTicketsImplRepository implements TicketRepository {
	constructor(private readonly apiUrl: string) {}
	async getAll(id: string): Promise<TicketEntity[]> {
		const response = await fetch(`${this.apiUrl}/tickets/${id}`, {
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();

		if (!response.ok)
			throw new Error(data.message || "Failed to fetch tickets");

		return data.tickets;
	}
}
