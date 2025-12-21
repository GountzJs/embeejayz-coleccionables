import { type ProfileEntity, rank } from "@embeejayz/core-accounts";
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
		case rank.unranked:
			return <ProfileUnranked profile={profile} />;
		case rank.bronze:
			return <ProfileBronze profile={profile} />;
		case rank.silver:
			return <ProfileSilver profile={profile} />;
		case rank.gold:
			return <ProfileGold profile={profile} />;
		case rank.platinum:
			return <ProfilePlatinum profile={profile} />;
		case rank.diamond:
			return <ProfileDiamond profile={profile} />;
		case rank.master:
			return <ProfileMaster profile={profile} />;
		default:
			return <ProfileChallenger profile={profile} />;
	}
};
