import type { InfoTicketEntity } from "../domain/entities/info-ticket.entity";
import type { TicketEntity } from "../domain/entities/ticket.entity";
import type { TicketRepository } from "../domain/repositories/ticket.repository";

export class FetchTicketsImplRepository implements TicketRepository {
	constructor(private readonly apiUrl: string) {}

	async getInfo(username: string): Promise<InfoTicketEntity> {
		const response = await fetch(
			`${this.apiUrl}/accounts/twitch/following/${username}`,
			{
				headers: {
					"Content-Type": "application/json",
				},
			},
		);
		const data = await response.json();

		if (!response.ok)
			throw new Error(data.message || "Failed to fetch tickets");

		return data;
	}

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
