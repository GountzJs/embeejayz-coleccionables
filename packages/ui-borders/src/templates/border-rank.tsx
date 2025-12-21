import type { BorderEntity } from "@embeejayz/core-borders";
import {
	borderRank,
	spells,
	type TBorderRank,
	type TSpell,
} from "@embeejayz/core-borders";
import { BorderBronze } from "../molecules/border-bronze";
import { BorderChallenger } from "../molecules/border-challenger";
import { BorderDiamond } from "../molecules/border-diamond";
import { BorderGold } from "../molecules/border-gold";
import { BorderMaster } from "../molecules/border-master";
import { BorderPlatinum } from "../molecules/border-platinum";
import { BorderSilver } from "../molecules/border-silver";

interface Props {
	cdnUrl: string;
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
	cdnUrl,
}: Props) {
	const commonProps = {
		cdnUrl,
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
