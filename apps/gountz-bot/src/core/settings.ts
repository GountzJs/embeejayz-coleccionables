// biome-ignore assist/source/organizeImports: <Autosave import>
import { config } from "dotenv";
import { resolve } from "node:path";
import { cwd } from "node:process";

if (process.env.NODE_ENV === "development") {
	const envPath = resolve(cwd(), ".env.local");
	config({ path: envPath });
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
