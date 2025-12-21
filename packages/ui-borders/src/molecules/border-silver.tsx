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

export function BorderSilver({
	avatarUrl,
	coverUrl,
	name,
	username,
	leftIcon,
	rightIcon,
	cdnUrl,
}: Props) {
	return (
		<BorderBox>
			<AvatarPosition bottom="0.5rem" left="1rem" width="268px">
				<UserAvatar url={avatarUrl} size={69} />
			</AvatarPosition>
			<BorderCoverPosition bottom="6.2rem" left="1rem" width="280px">
				<BorderCover
					cdnUrl={cdnUrl}
					url={coverUrl}
					alt="Faker Cover"
					width={280}
					height={430}
				/>
			</BorderCoverPosition>
			<BorderNamePosition bottom="6.375rem" left="1.2rem" width="274px">
				<BorderName>{name}</BorderName>
			</BorderNamePosition>
			<SpellsPosition bottom="0.875rem" left="5.5rem" gap="0.5rem">
				<Spell
					cdnUrl={cdnUrl}
					url={`/images/spells/${leftIcon}.jpg`}
					alt="Spell Left"
					width={47}
					height={47}
				/>
				<Spell
					cdnUrl={cdnUrl}
					url={`/images/spells/${rightIcon}.jpg`}
					alt="Spell Right"
					width={46}
					height={46}
				/>
			</SpellsPosition>
			<DecoratorRank
				cdnUrl={cdnUrl}
				rank={borderRank.silver}
				width={300}
				height={540}
				alt="Silver Rank Cover"
			/>
			<BorderUsernamePosition bottom="76px" left="1.125rem" width="268px">
				<BorderUsername>{username}</BorderUsername>
			</BorderUsernamePosition>
		</BorderBox>
	);
}
