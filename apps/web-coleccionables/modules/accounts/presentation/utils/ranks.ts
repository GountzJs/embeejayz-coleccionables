import { rank as rankConsts, type TRank } from "@embeejayz/core-accounts";

export const getRankByIndex = (index: number) => {
	switch (index) {
		case 0:
			return rankConsts.challenger;
		case 1:
			return rankConsts.master;
		case 2:
			return rankConsts.diamond;
		case 3:
			return rankConsts.platinum;
		case 4:
			return rankConsts.gold;
		case 5:
			return rankConsts.silver;
		case 6:
			return rankConsts.bronze;
		default:
			return rankConsts.unranked;
	}
};

export const getColorRank = (rank: TRank) => {
	switch (rank) {
		case rankConsts.challenger:
			return "#e7be5c";
		case rankConsts.master:
			return "#74857f";
		case rankConsts.diamond:
			return "#5579cf";
		case rankConsts.platinum:
			return "#114644";
		case rankConsts.gold:
			return "#77070a";
		case rankConsts.silver:
			return "#594b24";
		case rankConsts.bronze:
			return "#515760";
		default:
			return "#68a9a5";
	}
};

export const getGradientRank = (rank: TRank) => {
	switch (rank) {
		case rankConsts.challenger:
			return "linear-gradient(to right, #fff77f 0, #9a5c16 50%, #1ba4e3 100%)";
		case rankConsts.master:
			return "linear-gradient(to right, #4e5b54, #e9b766, #0bbba9)";
		case rankConsts.diamond:
			return "linear-gradient(to right, #5579cf, #e4cda5, #2d7050)";
		case rankConsts.platinum:
			return "linear-gradient(to left, #665e2e, #ede0a3, #016062)";
		case rankConsts.gold:
			return "linear-gradient(to right, #f4efaa, #cc893b, #8a4d1d)";
		case rankConsts.silver:
			return "linear-gradient(to right, #ccdccd, #769487, #60736c)";
		case rankConsts.bronze:
			return "linear-gradient(to right, #f5cc91, #956133, #281102)";
		default:
			return "var(--color-gray-light)";
	}
};
