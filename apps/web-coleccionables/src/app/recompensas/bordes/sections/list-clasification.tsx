import { cdnUrl } from "@/core/settings";
import { spells } from "@modules/borders/domain/consts/spells.const";
import { BorderBronze } from "@modules/borders/presentation/components/border-bronze/border-bronze";
import { BorderChallenger } from "@modules/borders/presentation/components/border-challenger/border-challenger";
import { BorderDiamond } from "@modules/borders/presentation/components/border-diamond/border-diamond";
import { BorderGold } from "@modules/borders/presentation/components/border-gold/border-gold";
import { BorderMaster } from "@modules/borders/presentation/components/border-master/border-master";
import { BorderPlatinum } from "@modules/borders/presentation/components/border-platinum/border-platinum";
import { BorderSilver } from "@modules/borders/presentation/components/border-silver/border-silver";

export function ListClasification() {
	return (
		<section className="flex flex-col items-center justify-center gap-14 mt-24 w-full">
			<h1 className="font-bold text-4xl text-center w-full">
				Clasificación de los bordes
			</h1>
			<div className="flex flex-wrap justify-center gap-5 w-full">
				<BorderChallenger
					avatarUrl={`${cdnUrl}/images/avatars/embeejayz.avif`}
					coverUrl={`/images/proplayers/keria/default.png`}
					name="Keria"
					username="embeejayz"
					leftIcon={spells.flash}
					rightIcon={spells.ignite}
				/>
				<BorderMaster
					avatarUrl={`${cdnUrl}/images/avatars/embeejayz.avif`}
					coverUrl={`/images/proplayers/keria/default.png`}
					name="Keria"
					username="embeejayz"
					leftIcon={spells.flash}
					rightIcon={spells.ignite}
				/>
				<BorderDiamond
					avatarUrl={`${cdnUrl}/images/avatars/embeejayz.avif`}
					coverUrl={`/images/proplayers/keria/default.png`}
					name="Keria"
					username="embeejayz"
					leftIcon={spells.flash}
					rightIcon={spells.ignite}
				/>
				<BorderPlatinum
					avatarUrl={`${cdnUrl}/images/avatars/embeejayz.avif`}
					coverUrl={`/images/proplayers/keria/default.png`}
					name="Keria"
					username="embeejayz"
					leftIcon={spells.flash}
					rightIcon={spells.ignite}
				/>
				<BorderGold
					avatarUrl={`${cdnUrl}/images/avatars/embeejayz.avif`}
					coverUrl={`/images/proplayers/keria/default.png`}
					name="Keria"
					username="embeejayz"
					leftIcon={spells.flash}
					rightIcon={spells.ignite}
				/>
				<BorderSilver
					avatarUrl={`${cdnUrl}/images/avatars/embeejayz.avif`}
					coverUrl={`/images/proplayers/keria/default.png`}
					name="Keria"
					username="embeejayz"
					leftIcon={spells.flash}
					rightIcon={spells.ignite}
				/>
				<BorderBronze
					avatarUrl={`${cdnUrl}/images/avatars/embeejayz.avif`}
					coverUrl={`/images/proplayers/keria/default.png`}
					name="Keria"
					username="embeejayz"
					leftIcon={spells.flash}
					rightIcon={spells.ignite}
				/>
			</div>
		</section>
	);
}
