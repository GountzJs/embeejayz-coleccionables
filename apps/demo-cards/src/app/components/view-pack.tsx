// biome-ignore assist/source/organizeImports: Autoimport save
import { usePack } from "@/app/contexts/pack/pack.context";
import { cdnUrl } from "@/core/settings";
import type { TSizePackEmbeecard } from "@embeejayz/core-cards";
import { useDialog } from "./dialog/context/dialog.provider";

interface Props {
	id: TSizePackEmbeecard;
	name: string;
}

export function ViewPack({ name, id }: Props) {
	const { addPack } = usePack();
	const { changeOpen } = useDialog();

	const handleOnClick = () => {
		changeOpen(true);
		addPack(id);
	};

	return (
		<button
			type="button"
			className="relative cursor-pointer hover:opacity-80 duration-200 transform-opacity w-[150px] h-60"
			onClick={handleOnClick}
		>
			<img
				className="absolute bottom-0"
				src={`${cdnUrl}/images/cards/sobre-body.png`}
				height={280}
				width={200}
				alt="Sobre body"
				style={{
					aspectRatio: "161/223",
				}}
			/>
			<img
				className="absolute top-0"
				src={`${cdnUrl}/images/cards/sobre-top.png`}
				height={280}
				width={200}
				alt="Sobre top"
				style={{
					aspectRatio: "644/227",
				}}
			/>
			<p className="absolute bottom-4 leading-5 text-center font-black text-lg w-full">
				Sobre {name}
			</p>
		</button>
	);
}
