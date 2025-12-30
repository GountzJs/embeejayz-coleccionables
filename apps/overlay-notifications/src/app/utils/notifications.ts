import { v4 } from "uuid";
import type { NotificationSwap } from "../models/consts/notification-swap.const";
import type { TypeNotification } from "../models/consts/type-notification.const";
import type { Notification } from "../models/entities/notification.entity";

export const formatNotification = (
	type: string,
	message: string[],
): Notification => {
	const typeN = type as TypeNotification;
	const swap = message[0] as NotificationSwap;
	const quantity = message[1] || "1";
	const isSpecial = message[2] === "true";
	const username = message[3];

	return {
		id: v4(),
		type: typeN,
		swap,
		quantity,
		isSpecial,
		username,
	};
};
