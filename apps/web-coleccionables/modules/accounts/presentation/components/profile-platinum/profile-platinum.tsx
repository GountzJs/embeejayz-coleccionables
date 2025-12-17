import type { ProfileEntity } from "../../../domain/entities/profile.entity";
import { ProfileAvatar } from "../../lib/avatar/profile-avatar";
import { ProfileBox } from "../../lib/box/profile-box";
import { ProfileQuantity } from "../../lib/quantity/profile-quantity";
import { ProfileSummonerIcon } from "../../lib/summoner-icon/profile-summoner-icon";
import { ProfileTotal } from "../../lib/total/profile-total";
import { ProfileUsername } from "../../lib/username/profile-username";
import styles from "./styles.module.css";

interface Props {
	profile: ProfileEntity;
}

export function ProfilePlatinum({ profile }: Props) {
	return (
		<ProfileBox rank={profile.rank} width={230} height={488}>
			<ProfileTotal total={profile.total.general} className={styles.total} />

			<ProfileAvatar
				avatar={profile.avatar}
				className={`${styles.avatar}`}
				height={86}
				width={86}
			/>

			<div className={styles.summonerIconWrapper}>
				<ProfileSummonerIcon rank={profile.rank} width={180} height={118} />
			</div>

			<ProfileUsername
				username={profile.username}
				className={styles.usernameCenteredBottom}
			/>

			<div className={styles.quantitiesWrapper}>
				<ProfileQuantity quantity={profile.total.borders} label="Bordes" />
				<ProfileQuantity quantity={profile.total.cards} label="Cartas" />
			</div>
		</ProfileBox>
	);
}
