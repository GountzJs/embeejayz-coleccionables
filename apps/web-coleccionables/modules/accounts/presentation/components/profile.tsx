import { Rank } from "../../domain/consts/rank.enum";
import type { ProfileEntity } from "../../domain/entities/profile.entity";
import { useProfileContext } from "../contexts/profile.context";
import { ProfileBronze } from "./profile-bronze/profile-bronze";
import { ProfileChallenger } from "./profile-challenger/profile-challenger";
import { ProfileDiamond } from "./profile-diamond/profile-diamond";
import { ProfileGold } from "./profile-gold/profile-gold";
import { ProfileMaster } from "./profile-master/profile-master";
import { ProfilePlatinum } from "./profile-platinum/profile-platinum";
import { ProfileSilver } from "./profile-silver/profile-silver";
import { ProfileSkeleton } from "./profile-skeleton";
import { ProfileUnranked } from "./profile-unranked/profile-unranked";

export function Profile() {
	const { isLoading, data } = useProfileContext();

	if (isLoading || !data) return <ProfileSkeleton />;

	return <ViewProfile profile={data} />;
}

const ViewProfile = ({ profile }: { profile: ProfileEntity }) => {
	switch (profile.rank) {
		case Rank.Unranked:
			return <ProfileUnranked profile={profile} />;
		case Rank.Bronze:
			return <ProfileBronze profile={profile} />;
		case Rank.Silver:
			return <ProfileSilver profile={profile} />;
		case Rank.Gold:
			return <ProfileGold profile={profile} />;
		case Rank.Platinum:
			return <ProfilePlatinum profile={profile} />;
		case Rank.Diamond:
			return <ProfileDiamond profile={profile} />;
		case Rank.Master:
			return <ProfileMaster profile={profile} />;
		default:
			return <ProfileChallenger profile={profile} />;
	}
};
