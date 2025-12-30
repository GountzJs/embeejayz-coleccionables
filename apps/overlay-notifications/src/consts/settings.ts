const env = import.meta.env;

export const {
	VITE_TWITCH_CHANNEL: twitchChannel = "",
	VITE_CDN_URL: cdnUrl = "",
	VITE_API_URL: apiUrl = "",
} = env;

export const debug = (env.VITE_DEBUG ?? "false") === "true";
