// biome-ignore assist/source/organizeImports: <Auto save import>
import { cdnUrl } from "@/core/settings";
import { EmbeeLink } from "@modules/common/presentation/components/embee-link";

export function NotBorders() {
	return (
		<div className="flex flex-col items-center justify-center gap-6 h-full w-full">
			<img
				src={`${cdnUrl}/images/banner/bordes.png`}
				width={300}
				height={300}
				alt="Not Found Borders"
				className="object-contain opacity-50"
			/>
			<h1 className="text-4xl font-bold text-pretty">
				No tiene bordes canjeados aún
			</h1>
			<p className="text-pretty text-center w-2/4">
				Para obtener bordes, participa en los streams canjeando los gratuitos,
				con puntos o donaciones al canal.
			</p>
			<EmbeeLink />
		</div>
	);
}
