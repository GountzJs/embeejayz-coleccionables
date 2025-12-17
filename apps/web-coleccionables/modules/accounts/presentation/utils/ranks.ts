import { rank, type TRank } from "../../domain/consts/rank.consts";

export const getRankByIndex = (index: number) => {
	switch (index) {
		case 0:
			return rank.challenger;
		case 1:
			return rank.master;
		case 2:
			return rank.diamond;
		case 3:
			return rank.platinum;
		case 4:
			return rank.gold;
		case 5:
			return rank.silver;
		case 6:
			return rank.bronze;
		default:
			return rank.unranked;
	}
};

export const getColorRank = (rank: TRank) => {
	switch (rank) {
		case rank.Challenger:
			return "#e7be5c";
		case rank.Master:
			return "#74857f";
		case rank.Diamond:
			return "#5579cf";
		case rank.Platinum:
			return "#114644";
		case rank.Gold:
			return "#77070a";
		case rank.Silver:
			return "#594b24";
		case rank.Bronze:
			return "#515760";
		default:
			return "#68a9a5";
	}
};

export const getGradientRank = (rank: TRank) => {
	switch (rank) {
		case rank.Challenger:
			return "linear-gradient(to right, #fff77f 0, #9a5c16 50%, #1ba4e3 100%)";
		case rank.Master:
			return "linear-gradient(to right, #4e5b54, #e9b766, #0bbba9)";
		case rank.Diamond:
			return "linear-gradient(to right, #5579cf, #e4cda5, #2d7050)";
		case rank.Platinum:
			return "linear-gradient(to left, #665e2e, #ede0a3, #016062)";
		case rank.Gold:
			return "linear-gradient(to right, #f4efaa, #cc893b, #8a4d1d)";
		case rank.Silver:
			return "linear-gradient(to right, #ccdccd, #769487, #60736c)";
		case rank.Bronze:
			return "linear-gradient(to right, #f5cc91, #956133, #281102)";
		default:
			return "var(--color-gray-light)";
	}
};
