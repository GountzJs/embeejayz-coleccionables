import { borderRank } from "../../domain/consts/rank.consts";

export const getRankByQuantity = (quantity: number, isSpecial: boolean) => {
	if (isSpecial || quantity >= 7) {
		return borderRank.challenger;
	}

	if (quantity === 6) {
		return borderRank.master;
	}

	if (quantity === 5) {
		return borderRank.diamond;
	}

	if (quantity === 4) {
		return borderRank.platinum;
	}

	if (quantity === 3) {
		return borderRank.gold;
	}

	if (quantity === 2) {
		return borderRank.silver;
	}

	return borderRank.bronze;
};
