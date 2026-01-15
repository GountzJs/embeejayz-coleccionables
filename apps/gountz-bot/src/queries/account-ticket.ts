import { v4 as uuid } from "uuid";
import { turso } from "../db/client";

export class AccountTicketQueries {
	async assignSpecial(accountId: string, ticketId: string) {
		const { rows } = await turso.execute({
			sql: `
				SELECT id
				FROM account_tickets
				WHERE account_id = ? AND ticket_id = ?;
			`,
			args: [accountId, ticketId],
		});

		if (rows.length) {
			throw new Error("Ya tienes el ticket del enfrentamiento");
		}

		await turso.execute({
			sql: `
				INSERT INTO account_tickets (id, account_id, ticket_id, created_at, updated_at)
				VALUES (?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
			`,
			args: [uuid(), accountId, ticketId],
		});

		return { accountId, ticketId };
	}
}
