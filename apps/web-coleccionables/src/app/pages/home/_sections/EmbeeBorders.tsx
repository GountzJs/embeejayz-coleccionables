import { cdnUrl } from "@/app/core/settings";
import { Link } from "react-router";

export function EmbeeBorders() {
	return (
		<section className="flex flex-1 items-center justify-center md:justify-between gap-4 py-12 px-mobile md:px-tablet lg:px-desktop w-full">
			<article className="flex flex-col items-center gap-12 min-w-[350px] max-w-1/2 w-full">
				<h1 className="text-5xl font-black text-center w-full">
					Bordes clasificatorios
				</h1>
				<div className="flex flex-col gap-4 w-full">
					<p className="font-regular font-regular text-lg">
						Coleccionables con los distintos proplayers que han dejado su huella
						en la escena competitiva, destacando sus mejores momentos en
						diversas competencias internacionales y regionales.
					</p>

					<p className="font-regular font-regular text-lg">
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

			<img
				className="object-contain aspect-640/661 max-h-auto max-w-1/2"
				src={`${cdnUrl}/images/banner/bordes.png`}
				alt="Bordes clasificatorios de Embeejayz"
				width={640}
				height={661}
				loading="eager"
				decoding="sync"
			/>
		</section>
	);
}
