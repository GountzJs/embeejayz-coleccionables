// biome-ignore assist/source/organizeImports: <Autosave import>
import { cdnUrl } from "@/core/settings";
import { spells } from "@embeejayz/core-borders";
import {
	BorderBronze,
	BorderChallenger,
	BorderDiamond,
	BorderGold,
	BorderMaster,
	BorderPlatinum,
	BorderSilver,
} from "@embeejayz/ui-borders";

export function ListClasification() {
	return (
		<section className="flex flex-col items-center justify-center gap-14 mt-24 w-full">
			<h1 className="font-bold text-4xl text-center w-full">
				Clasificación de los bordes
			</h1>
			<div className="flex flex-wrap justify-center gap-5 w-full">
				<BorderChallenger
					cdnUrl={cdnUrl}
					avatarUrl={`${cdnUrl}/images/avatars/embeejayz.avif`}
					coverUrl={`/images/proplayers/keria/default.png`}
					name="Keria"
					username="embeejayz"
					leftIcon={spells.flash}
					rightIcon={spells.ignite}
				/>
				<BorderMaster
					cdnUrl={cdnUrl}
					avatarUrl={`${cdnUrl}/images/avatars/embeejayz.avif`}
					coverUrl={`/images/proplayers/keria/default.png`}
					name="Keria"
					username="embeejayz"
					leftIcon={spells.flash}
					rightIcon={spells.ignite}
				/>
				<BorderDiamond
					cdnUrl={cdnUrl}
					avatarUrl={`${cdnUrl}/images/avatars/embeejayz.avif`}
					coverUrl={`/images/proplayers/keria/default.png`}
					name="Keria"
					username="embeejayz"
					leftIcon={spells.flash}
					rightIcon={spells.ignite}
				/>
				<BorderPlatinum
					cdnUrl={cdnUrl}
					avatarUrl={`${cdnUrl}/images/avatars/embeejayz.avif`}
					coverUrl={`/images/proplayers/keria/default.png`}
					name="Keria"
					username="embeejayz"
					leftIcon={spells.flash}
					rightIcon={spells.ignite}
				/>
				<BorderGold
					cdnUrl={cdnUrl}
					avatarUrl={`${cdnUrl}/images/avatars/embeejayz.avif`}
					coverUrl={`/images/proplayers/keria/default.png`}
					name="Keria"
					username="embeejayz"
					leftIcon={spells.flash}
					rightIcon={spells.ignite}
				/>
				<BorderSilver
					cdnUrl={cdnUrl}
					avatarUrl={`${cdnUrl}/images/avatars/embeejayz.avif`}
					coverUrl={`/images/proplayers/keria/default.png`}
					name="Keria"
					username="embeejayz"
					leftIcon={spells.flash}
					rightIcon={spells.ignite}
				/>
				<BorderBronze
					cdnUrl={cdnUrl}
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
