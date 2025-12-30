const env = import.meta.env;

export const {
	VITE_PUBLIC_TWITCH_CHANNEL: twitchChannel = "",
	VITE_PUBLIC_CDN_URL: cdnUrl = "",
	VITE_PUBLIC_API_URL: apiUrl = "",
} = env;

export const debug = (env.VITE_DEBUG ?? "false") === "true";
