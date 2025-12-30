import type { NotificationSwap } from "../consts/notification-swap.const";
import type { TypeNotification } from "../consts/type-notification.const";

export type Notification = {
	id: string;
	type: TypeNotification;
	swap: NotificationSwap;
	quantity: string;
	isSpecial: boolean;
	username: string;
};
