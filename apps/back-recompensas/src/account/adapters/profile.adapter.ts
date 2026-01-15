import type { Total } from "../models/types/total.type";

type Data = {
	id: string;
	avatar: string;
	username: string;
	team: string | null;
	total?: Total;
};

export const profileAdapter = ({
	id,
	avatar,
	username,
	total,
	team,
}: Data) => ({
	data: {
		id,
		avatar,
		username,
		team,
		total: {
			borders: total?.borders || 0,
			cards: total?.cards || 0,
			general: total?.general || 0,
		},
	},
});
