import type { TwitchCallback } from "../entities/twitch-callback.entity";

export interface TwitchRepository {
	connect(): Promise<void>;
	disconnect(): Promise<void>;
	on(callback: TwitchCallback): void;
	removeAllListeners(): void;
}
