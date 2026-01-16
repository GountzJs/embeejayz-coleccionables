/** biome-ignore-all lint/style/useImportType: any */
import { BordersController } from "./controllers/borders.controller";
import { EmbeeCardsController } from "./controllers/embeecards.controller";
import { TicketsContoller } from "./controllers/tickets.controller";
import { Worlds2025Controller } from "./controllers/worlds2025.controller";
import { lolTeams, TLolTeams } from "./core/const";
import { twitchBotUsername, twitchChannel } from "./core/settings";
import { User } from "./entities/user.entity";
import { RewardsState } from "./lib/rewards-state";
import { TmiClient } from "./lib/twitch-client";

export const handlerOnProcess = (client: TmiClient) => {
	process.on("exit", async () => {
		console.log("🚪 Saliendo... cerrando conexión.");
		await client.disconnect();
		process.exit();
	});

	process.on("SIGINT", async () => {
		console.log("🚪 Interrumpido manualmente... cerrando conexión.");
		await client.disconnect();
		process.exit();
	});
};

export const handlerOnMessage = (client: TmiClient) => {
	const rewardsState = new RewardsState();
	const bordersController = new BordersController(client);
	const embeecardsController = new EmbeeCardsController(client);
	const worlds2025Controller = new Worlds2025Controller(client);
	const ticketsContoller = new TicketsContoller(client);

	return client.on("message", (channel, tag, msg, self) => {
		if (self || !msg?.length) return;

		const user = new User();
		user.ref = tag["user-id"];
		user.isMod = tag.mod;
		user.isCreator = tag["display-name"] === channel;
		user.platform = tag.platform;

		if (msg.startsWith("!mi-equipo ")) {
			const [_, team] = msg.trim().split(" ");
			const newTeam = team.toUpperCase();
			const validTeams = Object.values(lolTeams);

			if (!validTeams.includes(newTeam as TLolTeams)) {
				client.say(
					twitchChannel,
					`🤖 @${tag["display-name"]}: El equipo que ingresaste no es válido.`,
				);
				return;
			}
			ticketsContoller.addTeam(newTeam, tag["display-name"]);
		}

		if ((user.isCreator || user.isMod) && msg.toLowerCase() === "!ping") {
			client.say(twitchChannel, `🤖 @${tag["display-name"]}: Pong`);
			return;
		}
		const msgLower = msg.toLowerCase();

		if (msgLower.includes("onlyfans")) {
			client.say(
				twitchChannel,
				`🤖 @${tag["display-name"]}: https://shorts.embeejayz.com/onlyfans`,
			);
			return;
		}

		if (
			(msgLower.includes("cuando") && msgLower.includes("juega")) ||
			(msgLower.includes("cuanto") && msgLower.includes("falta")) ||
			(msgLower.includes("cuanto") && msgLower.includes("juega"))
		) {
			client.say(
				twitchChannel,
				`🤖 @${tag["display-name"]}: https://shorts.embeejayz.com/cuando-juega`,
			);
			return;
		}

		// Perfil Comandos
		if (msg.toLowerCase() === "!mi-perfil") {
			client.say(
				twitchChannel,
				`🤖 Tu perfil @${
					tag["display-name"]
				}: https://coleccionables.embeejayz.com/usuarios/${tag[
					"display-name"
				].toLowerCase()}`,
			);
			return;
		}

		if ((user.isCreator || user.isMod) && msg.startsWith("!perfil ")) {
			const username = msg.split(" ")[1].replace("@", "");
			client.say(
				twitchChannel,
				`🤖 Tu perfil @${username}: https://coleccionables.embeejayz.com/usuarios/${username.toLowerCase()}`,
			);
			return;
		}

		// Bordes Comandos
		if (
			(user.isCreator || user.isMod) &&
			msg.toLowerCase().match(/!\[(\d+)\]-borders\s+(@\w+)/g)
		) {
			const displayName = msg
				.split("@")[1]
				.replace(/[^a-zA-Z0-9_-\s]/g, "")
				.trim();
			const quantity = msg.split("]")[0].replace(/[^0-9]/g, "");
			const quantityNumber = Number(quantity || 1);
			if (Number.isNaN(quantityNumber)) {
				console.log(
					`❌ Se intentó asignar un número inválido de bordes al usuario [@${displayName}].`,
				);
				return;
			}
			bordersController.insertManyRandom(displayName, quantityNumber);
			return;
		}

		if ((user.isCreator || user.isMod) && msg.startsWith("!border ")) {
			const displayName = msg
				.replace("!border", "")
				.replace("@", "")
				.replace(/[^a-zA-Z0-9_-\s]/g, "")
				.trim();
			bordersController.insertRandom(displayName);
			return;
		}

		if ((user.isCreator || user.isMod) && msg.startsWith("!figurita ")) {
			const displayName = msg
				.replace("!figurita", "")
				.replace("@", "")
				.replace(/[^a-zA-Z0-9_-\s]/g, "")
				.trim();
			worlds2025Controller.insertRandom(displayName);
			return;
		}

		if (
			(user.isCreator || user.isMod) &&
			msg.toLowerCase().match(/!\[(\d+)\]-figuritas\s+(@\w+)/g)
		) {
			const displayName = msg
				.split("@")[1]
				.replace(/[^a-zA-Z0-9_-\s]/g, "")
				.trim();
			const quantity = msg.split("]")[0].replace(/[^0-9]/g, "");
			const quantityNumber = Number(quantity || 1);
			if (Number.isNaN(quantityNumber)) {
				console.log(
					`❌ Se intentó asignar un número inválido de figuritas al usuario [@${displayName}].`,
				);
				return;
			}
			worlds2025Controller.insertManyRandom(displayName, quantityNumber);
			return;
		}

		// Cartas comandos
		if (
			(user.isCreator || user.isMod) &&
			msg.toLowerCase().startsWith("!card")
		) {
			const displayName = msg
				.replace("!card", "")
				.replace("@", "")
				.replace(/[^a-zA-Z0-9_-\s]/g, "")
				.trim();

			embeecardsController.insertRandom(displayName);
			return;
		}

		if (
			(user.isCreator || user.isMod) &&
			msg.toLowerCase().startsWith("!small-pack")
		) {
			const displayName = msg
				.replace("!small-pack", "")
				.replace("@", "")
				.replace(/[^a-zA-Z0-9_-\s]/g, "")
				.trim();
			embeecardsController.insertManyRandom(displayName, 3);
			return;
		}

		if (
			(user.isCreator || user.isMod) &&
			msg.toLowerCase().startsWith("!pack")
		) {
			const displayName = msg
				.replace("!pack", "")
				.replace("@", "")
				.replace(/[^a-zA-Z0-9_\-\s]/g, "")
				.trim();
			embeecardsController.insertManyRandom(displayName, 6);
			return;
		}

		if (
			(user.isCreator || user.isMod) &&
			msg.toLowerCase().startsWith("!big-pack")
		) {
			const displayName = msg
				.replace("!big-pack", "")
				.replace("@", "")
				.replace(/[^a-zA-Z0-9_\-\s]/g, "")
				.trim();
			embeecardsController.insertManyRandom(displayName, 12);
			return;
		}

		// Canjeo recompensas gratis
		if (rewardsState.isTicketActive && msg.toLowerCase() === "!reward") {
			ticketsContoller.insertSpecial(
				tag["display-name"],
				rewardsState.idTicket,
			);
			// if (rewardsState.isBorderActive && rewardsState.isCardActive) {
			// 	bordersController.insertSpecial(
			// 		tag["display-name"],
			// 		rewardsState.idBorder,
			// 	);
			// 	// twitchCards.insertSpecial(user, rewardsState.idCard);
			// 	return;
			// }
			// if (rewardsState.isBorderActive) {
			// 	bordersController.insertSpecial(
			// 		tag["display-name"],
			// 		rewardsState.idBorder,
			// 	);
			// 	return;
			// }
			// twitchCards.insertSpecial(user, rewardsState.idCard);
			return;
		}

		// Configuración de recompensas
		if ((user.isCreator || user.isMod) && msg.startsWith("!agregar-borde ")) {
			const [_, idBorder] = msg.split("!agregar-borde ");
			rewardsState.idBorder = idBorder;
			client.say(`#${twitchBotUsername}`, `🤖 Borde especial agregado!`);
			return;
		}

		if ((user.isCreator || user.isMod) && msg.startsWith("!agregar-ticket ")) {
			const [_, idTicket] = msg.split("!agregar-ticket ");
			rewardsState.idTicket = idTicket;
			client.say(
				`#${twitchBotUsername}`,
				`🤖 Ticket del enfrentamient agregado!`,
			);
			return;
		}

		if (
			(user.isCreator || user.isMod) &&
			msg.toLowerCase() === "!ticket-special"
		) {
			rewardsState.toggleTicket();
			const msg = rewardsState.isTicketActive
				? `!message success-🤖 Se activó el ticket del enfrentamiento`
				: `!message success-🤖 Se desactivo el ticket del enfrentamiento.`;
			client.say(`#${twitchBotUsername}`, msg);
			return;
		}

		if (
			(user.isCreator || user.isMod) &&
			msg.toLowerCase() === "!card-special"
		) {
			rewardsState.toggleCardSpecial();

			const msg = rewardsState.isCardActive
				? `!message success-🤖 Se activó la carta única del día.`
				: `!message success-🤖 Se desactivó la carta única día.`;
			client.say(`#${twitchBotUsername}`, msg);
			return;
		}
	});
};
