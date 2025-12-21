import { borderRank, type TSpell } from "@embeejayz/core-borders";
import { UserAvatar } from "@modules/common/presentation/components/user-avatar";
import { BorderBox } from "../../lib/box/border-box";
import { BorderCover } from "../../lib/cover/border-cover";
import { BorderName } from "../../lib/name/border-name";
import { BorderRank } from "../../lib/rank/border-rank";
import { Spell } from "../../lib/spell/spell";
import { BorderUsername } from "../../lib/username/border-username";
import styles from "./styles.module.css";

interface Props {
	avatarUrl: string;
	coverUrl: string;
	name: string;
	username: string;
	leftIcon: TSpell;
	rightIcon: TSpell;
}

export function BorderGold({
	avatarUrl,
	coverUrl,
	name,
	username,
	leftIcon,
	rightIcon,
}: Props) {
	return (
		<BorderBox>
			<div className={styles.avatar}>
				<UserAvatar url={avatarUrl} size={69} />
			</div>
			<div className={styles.cover}>
				<BorderCover
					url={coverUrl}
					alt="Faker Cover"
					width={272}
					height={420}
				/>
			</div>
			<div className={styles.name}>
				<BorderName name={name} />
			</div>
			<div className={styles.spells}>
				<Spell
					url={`/images/spells/${leftIcon}.jpg`}
					alt="Spell Left"
					width={46.5}
					height={46.5}
				/>
				<Spell
					url={`/images/spells/${rightIcon}.jpg`}
					alt="Spell Right"
					width={46}
					height={46}
				/>
			</div>
			<BorderRank
				rank={borderRank.gold}
				width={300}
				height={540}
				alt="Gold Rank Cover"
			/>
			<div className={styles.username}>
				<BorderUsername username={username} />
			</div>
		</BorderBox>
	);
}
