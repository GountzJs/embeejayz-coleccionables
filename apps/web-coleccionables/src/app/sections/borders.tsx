// biome-ignore assist/source/organizeImports: Auto save import
import { cdnUrl } from "@/core/settings";
import { Link } from "react-router";

export function EmbeeBorders() {
	return (
		<section className="flex items-center md:justify-center flex-col 2xl:flex-row-reverse gap-8 py-4 pb-14 2xl:py-4 h-full w-full">
			<img
				className="object-contain aspect-640/661 w-[450px] max-w-3/4"
				src={`${cdnUrl}/images/banner/bordes.png`}
				alt="Bordes clasificatorios de Embeejayz"
				width={640}
				height={661}
				loading="eager"
				decoding="sync"
			/>
			<article className="flex flex-col items-center gap-4 h-fit w-full max-w-[700px]">
				<h1 className="text-3xl md:text-5xl font-black text-center text-balance w-full">
					Bordes clasificatorios
				</h1>
				<div className="flex flex-col gap-4 w-full">
					<p className="font-regular font-regular text-sm text-pretty md:text-lg">
						Coleccionables con los distintos proplayers que han dejado su huella
						en la escena competitiva, destacando sus mejores momentos en
						diversas competencias internacionales y regionales.
					</p>

					<p className="font-regular font-regular text-sm text-pretty md:text-lg">
						Ven al stream durante las retransmisiones del competitivo, <br />✨
						¡entregamos bordes únicos en vivo! ✨
					</p>
				</div>

				<Link
					to="/recompensas/bordes"
					className="text-white font-semibold py-2 px-10 rounded-md cursor-pointer select-none outline-2 outline-white will-change-transform duration-200 ease-in-out hover:scale-105"
				>
					Saber más
				</Link>
			</article>
		</section>
	);
}
