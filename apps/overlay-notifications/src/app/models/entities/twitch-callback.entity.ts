export type TwitchCallback = (
	channel: string,
	tags: Record<string, unknown>,
	message: string,
	self: boolean,
) => void;
