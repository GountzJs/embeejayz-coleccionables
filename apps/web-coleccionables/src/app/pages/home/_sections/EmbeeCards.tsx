import { cdnUrl } from "@/app/core/settings";
import { Link } from "react-router";

export function EmbeeCards() {
	return (
		<section className="flex items-center justify-between gap-4 py-12 px-mobile md:px-tablet lg:px-desktop h-full w-full">
			<article className="flex flex-col items-center gap-12 min-w-[350px] max-w-1/2 w-full">
				<h1 className="text-5xl font-black text-center w-full">EmbeeCards</h1>
				<div className="flex flex-col gap-4 w-full">
					<p className="font-regular font-regular text-lg">
						Convertimos nuestra pasión por T1, la escena competitiva y League of
						Legends&reg; en algo más que simples recuerdos o clips.
					</p>

					<p className="font-regular font-regular text-lg">
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

			<img
				className="object-contain aspect-640/419 max-h-auto max-w-1/2"
				src={`${cdnUrl}/images/banner/cards.png`}
				alt="Cartas de Embeejayz"
				width={640}
				height={419}
				loading="eager"
				decoding="sync"
			/>
		</section>
	);
}
