import { borderRank, type TSpell } from "@embeejayz/core-borders";
import { AvatarPosition } from "../atoms/avatar-position";
import { BorderBox } from "../atoms/border-box";
import { BorderCover } from "../atoms/border-cover";
import { BorderCoverPosition } from "../atoms/border-cover-position";
import { BorderName } from "../atoms/border-name";
import { BorderNamePosition } from "../atoms/border-name-position";
import { BorderUsername } from "../atoms/border-username";
import { BorderUsernamePosition } from "../atoms/border-username-position";
import { DecoratorRank } from "../atoms/decorator-rank";
import { Spell } from "../atoms/spell";
import { SpellsPosition } from "../atoms/spells-position";
import { UserAvatar } from "../atoms/user-avatar";

interface Props {
	cdnUrl: string;
	avatarUrl: string;
	coverUrl: string;
	name: string;
	username: string;
	leftIcon: TSpell;
	rightIcon: TSpell;
}

export function BorderChallenger({
	cdnUrl,
	avatarUrl,
	coverUrl,
	name,
	username,
	leftIcon,
	rightIcon,
}: Props) {
	return (
		<BorderBox>
			<AvatarPosition bottom="1rem" left="1.25rem" width="268px">
				<UserAvatar url={avatarUrl} size={65} />
			</AvatarPosition>
			<BorderCoverPosition bottom="6rem" left="1.25rem" width="265px">
				<BorderCover
					cdnUrl={cdnUrl}
					url={coverUrl}
					alt="Border cover"
					width={265}
					height={420}
				/>
			</BorderCoverPosition>
			<BorderNamePosition bottom="6.5rem" left="1.25rem" width="265px">
				<BorderName>{name}</BorderName>
			</BorderNamePosition>
			<SpellsPosition bottom="1.5rem" left="5.5rem" gap="0.5rem">
				<Spell
					cdnUrl={cdnUrl}
					url={`/images/spells/${leftIcon}.jpg`}
					alt="Spell Left"
					width={45}
					height={45}
				/>
				<Spell
					cdnUrl={cdnUrl}
					url={`/images/spells/${rightIcon}.jpg`}
					alt="Spell Right"
					width={45}
					height={45}
				/>
			</SpellsPosition>
			<DecoratorRank
				cdnUrl={cdnUrl}
				rank={borderRank.challenger}
				width={300}
				height={540}
				alt="Challenger Rank Cover"
			/>
			<BorderUsernamePosition bottom="83px" left="1.125rem" width="268px">
				<BorderUsername>{username}</BorderUsername>
			</BorderUsernamePosition>
		</BorderBox>
	);
}
