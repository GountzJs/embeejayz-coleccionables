/** biome-ignore-all lint/style/useImportType: any*/
import { twitchBotUsername } from "../core/settings";
import { TmiClient } from "../lib/twitch-client";
import { AccountQueries } from "../queries/account";
import {
	AccountTicketQueries,
} from "../queries/account-ticket";
import { TwitchServices } from "../services/twitch.services";

export class TicketsContoller {
	constructor(
		private client: TmiClient,
		private twitchServices: TwitchServices = new TwitchServices(),
		private accountQueries: AccountQueries = new AccountQueries(),
		private accountTicketsQueries: AccountTicketQueries = new AccountTicketQueries(),
	) {}

	async insertSpecial(username: string, ticketId: string) {
		try {
			const twitchUser = await this.twitchServices.getByUsername(username);
			const accountId =
				await this.accountQueries.getOrCreateAccount(twitchUser);

			await this.accountTicketsQueries.assignSpecial(accountId, ticketId);
			this.client.say(
				`#${twitchBotUsername}`,
				`!notification ticket-1-false-${username}`,
			);
		} catch (err) {
			const errorMessage =
				err instanceof Error
					? err.message
					: "No se pudo canjear el ticket del enfrentamiento";
			this.client.say(
				`#${twitchBotUsername}`,
				`!message error-@${username}: ${errorMessage}`,
			);
		}
	}
}
