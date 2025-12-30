export const typeNotification = {
	notification: "NOTIFICATION",
	success: "SUCCESS",
	error: "ERROR",
} as const;

export type TypeNotification =
	(typeof typeNotification)[keyof typeof typeNotification];
