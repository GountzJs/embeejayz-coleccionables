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

export function BorderPlatinum({
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
			<AvatarPosition bottom="0.5rem" left="1.125rem" width="268px">
				<UserAvatar url={avatarUrl} size={66} />
			</AvatarPosition>
			<BorderCoverPosition bottom="6.25rem" left="1.125rem" width="274px">
				<BorderCover
					cdnUrl={cdnUrl}
					url={coverUrl}
					alt="Faker Cover"
					width={274}
					height={422}
				/>
			</BorderCoverPosition>
			<BorderNamePosition bottom="6.375rem" left="1rem" width="280px">
				<BorderName>{name}</BorderName>
			</BorderNamePosition>
			<SpellsPosition bottom="1rem" left="5.75rem" gap="0.25rem">
				<Spell
					cdnUrl={cdnUrl}
					url={`/images/spells/${leftIcon}.jpg`}
					alt="Spell Left"
					width={46.4}
					height={46.4}
				/>
				<Spell
					cdnUrl={cdnUrl}
					url={`/images/spells/${rightIcon}.jpg`}
					alt="Spell Right"
					width={46.4}
					height={46.4}
				/>
			</SpellsPosition>
			<DecoratorRank
				cdnUrl={cdnUrl}
				rank={borderRank.platinum}
				width={300}
				height={540}
				alt="Platinum Rank Cover"
			/>
			<BorderUsernamePosition bottom="77.2px" left="1.25rem" width="268px">
				<BorderUsername>{username}</BorderUsername>
			</BorderUsernamePosition>
		</BorderBox>
	);
}
