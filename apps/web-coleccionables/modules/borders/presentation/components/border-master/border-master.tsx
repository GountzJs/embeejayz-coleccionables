import { UserAvatar } from "@modules/common/presentation/components/user-avatar";
import { borderRank } from "../../../domain/consts/rank.consts";
import type { TSpell } from "../../../domain/consts/spells.const";
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

export function BorderMaster({
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
					width={265}
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
					width={45}
					height={45}
				/>
				<Spell
					url={`/images/spells/${rightIcon}.jpg`}
					alt="Spell Right"
					width={45}
					height={45}
				/>
			</div>
			<BorderRank
				rank={borderRank.master}
				width={300}
				height={540}
				alt="Master Rank Cover"
			/>
			<div className={styles.username}>
				<BorderUsername username={username} />
			</div>
		</BorderBox>
	);
}
