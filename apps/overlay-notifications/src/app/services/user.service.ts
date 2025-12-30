// biome-ignore assist/source/organizeImports: <Autosave import>
import { apiUrl } from "@/consts/settings";
import type { UserTwitchEntity } from "@embeejayz/core-accounts";
import type { UserRepository } from "../models/repositories/user-repository";

export const userFetchImplRepository: UserRepository = {
	getUserTwitch: async (username: string): Promise<UserTwitchEntity> => {
		const response = await fetch(
			`${apiUrl}/accounts/twitch/${username.trim()}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			},
		);

		const data = await response.json();

		if (!response.ok) throw new Error(data.message || "Failed fetch user");

		return data.user;
	},
};
