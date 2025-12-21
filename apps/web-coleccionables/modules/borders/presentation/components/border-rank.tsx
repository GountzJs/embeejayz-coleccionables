import type { BorderEntity } from "@embeejayz/core-borders";
import {
	borderRank,
	spells,
	type TBorderRank,
	type TSpell,
} from "@embeejayz/core-borders";
import { BorderBronze } from "./border-bronze/border-bronze";
import { BorderChallenger } from "./border-challenger/border-challenger";
import { BorderDiamond } from "./border-diamond/border-diamond";
import { BorderGold } from "./border-gold/border-gold";
import { BorderMaster } from "./border-master/border-master";
import { BorderPlatinum } from "./border-platinum/border-platinum";
import { BorderSilver } from "./border-silver/border-silver";

interface Props {
	border: BorderEntity;
	username: string;
	avatarUrl: string;
	leftIcon?: TSpell;
	rightIcon?: TSpell;
	rank: TBorderRank;
}

export function BorderRank({
	border,
	username,
	avatarUrl,
	leftIcon,
	rightIcon,
	rank,
}: Props) {
	const commonProps = {
		avatarUrl,
		coverUrl: border.cover,
		name: border.name,
		username,
		leftIcon: leftIcon ?? spells.flash,
		rightIcon: rightIcon ?? spells.ignite,
	};

	switch (rank) {
		case borderRank.challenger:
			return <BorderChallenger {...commonProps} />;
		case borderRank.master:
			return <BorderMaster {...commonProps} />;
		case borderRank.diamond:
			return <BorderDiamond {...commonProps} />;
		case borderRank.platinum:
			return <BorderPlatinum {...commonProps} />;
		case borderRank.gold:
			return <BorderGold {...commonProps} />;
		case borderRank.silver:
			return <BorderSilver {...commonProps} />;
		default:
			return <BorderBronze {...commonProps} />;
	}
}
