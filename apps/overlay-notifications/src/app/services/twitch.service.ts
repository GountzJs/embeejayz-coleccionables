// biome-ignore assist/source/organizeImports: <Autosave import>
import { debug, twitchChannel } from "@/consts/settings";
import { type ChatUserstate, Client } from "tmi.js";
import type { TwitchRepository } from "../models/repositories/twitch-repository";

const client = new Client({
	channels: twitchChannel.split(","),
	options: {
		debug: debug,
	},
});

export const twitchImplRepository: TwitchRepository = {
	connect: async (): Promise<void> => {
		await client.connect();
	},
	disconnect: async (): Promise<void> => {
		await client.disconnect();
	},
	on(
		callback: (
			channel: string,
			userstate: ChatUserstate,
			message: string,
			self: boolean,
		) => void,
	): void {
		client.on("message", callback);
	},
	removeAllListeners: (): void => {
		client.removeAllListeners();
	},
};
