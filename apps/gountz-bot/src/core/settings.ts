import { resolve } from "node:path";
import { cwd } from "node:process";

if (process.env.NODE_ENV === "development") {
	const envPath = resolve(cwd(), ".env");
	process.loadEnvFile(envPath);
}

const env = process.env;

export const debug = env.DEBUG === "true";

export const {
	DB_URL: dbUrl = "",
	DB_TOKEN: dbToken = "",
	TWITCH_CLIENT_ID: twitchClientId = "",
	TWITCH_TOKEN: twitchToken = "",
	TWITCH_USERNAME: twitchBotUsername = "",
	TWITCH_CHANNEL: twitchChannel = "",
	TWITCH_API_URL: twitchApiUrl = "",
} = env;
