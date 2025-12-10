// biome-ignore assist/source/organizeImports: Auto save organization
import { cdnUrl } from "@/core/settings";
import { Link } from "react-router";

export function EmbeeCards() {
	return (
		<section className="flex items-center md:justify-center flex-col 2xl:flex-row-reverse gap-8 py-4 pb-14 2xl:py-4 h-full w-full">
			<img
				className="object-contain aspect-640/419 max-h-auto w-full max-w-[600px]"
				src={`${cdnUrl}/images/banner/cards.png`}
				alt="Cartas de Embeejayz"
				width={640}
				height={419}
				loading="eager"
				decoding="sync"
			/>

			<article className="flex flex-col items-center gap-4 h-fit w-full max-w-[500px]">
				<h1 className="text-3xl md:text-5xl font-black text-center text-pretty w-full">
					EmbeeCards
				</h1>
				<div className="flex flex-col gap-4 w-full">
					<p className="font-regular font-regular text-sm text-pretty md:text-lg">
						Convertimos nuestra pasión por T1, la escena competitiva y League of
						Legends&reg; en algo más que simples recuerdos o clips.
					</p>

					<p className="font-regular font-regular text-sm text-pretty md:text-lg">
						Ahora pueden disfrutar canjeando y descubriendo, a través de estos
						packs de cartas, tanto la historia de League of Legends&reg; como la
						de nuestra comunidad.
					</p>
				</div>

				<Link
					to="/recompensas/cartas"
					className="text-white font-semibold py-2 px-10 rounded-md cursor-pointer select-none outline-2 outline-white will-change-transform duration-200 ease-in-out hover:scale-105"
				>
					Saber más
				</Link>
			</article>
		</section>
	);
}
