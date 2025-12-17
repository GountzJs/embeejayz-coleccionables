import { Rank, type TRank } from "../../domain/consts/rank.enum";

export const getRankByIndex = (index: number) => {
	switch (index) {
		case 0:
			return Rank.Challenger;
		case 1:
			return Rank.Master;
		case 2:
			return Rank.Diamond;
		case 3:
			return Rank.Platinum;
		case 4:
			return Rank.Gold;
		case 5:
			return Rank.Silver;
		case 6:
			return Rank.Bronze;
		default:
			return Rank.Unranked;
	}
};

export const getColorRank = (rank: TRank) => {
	switch (rank) {
		case Rank.Challenger:
			return "#e7be5c";
		case Rank.Master:
			return "#74857f";
		case Rank.Diamond:
			return "#5579cf";
		case Rank.Platinum:
			return "#114644";
		case Rank.Gold:
			return "#77070a";
		case Rank.Silver:
			return "#594b24";
		case Rank.Bronze:
			return "#515760";
		default:
			return "#68a9a5";
	}
};

export const getGradientRank = (rank: TRank) => {
	switch (rank) {
		case Rank.Challenger:
			return "linear-gradient(to right, #fff77f 0, #9a5c16 50%, #1ba4e3 100%)";
		case Rank.Master:
			return "linear-gradient(to right, #4e5b54, #e9b766, #0bbba9)";
		case Rank.Diamond:
			return "linear-gradient(to right, #5579cf, #e4cda5, #2d7050)";
		case Rank.Platinum:
			return "linear-gradient(to left, #665e2e, #ede0a3, #016062)";
		case Rank.Gold:
			return "linear-gradient(to right, #f4efaa, #cc893b, #8a4d1d)";
		case Rank.Silver:
			return "linear-gradient(to right, #ccdccd, #769487, #60736c)";
		case Rank.Bronze:
			return "linear-gradient(to right, #f5cc91, #956133, #281102)";
		default:
			return "var(--color-gray-light)";
	}
};
