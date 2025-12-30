export const notificationSwap = {
	border: "border",
	sticker: "sticker",
	card: "card",
} as const;

export type NotificationSwap =
	(typeof notificationSwap)[keyof typeof notificationSwap];
