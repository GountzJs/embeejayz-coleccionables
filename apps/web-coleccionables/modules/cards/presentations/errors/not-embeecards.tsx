import { EmbeeLink } from "@modules/common/presentation/components/embee-link";

export function NotEmbeeCards() {
	return (
		<div className="flex flex-col items-center justify-center gap-6.5 w-full">
			{/* <Image
        src="/cards/cards.png"
        width={300}
        height={300}
        loading="eager"
        alt="No hay cartas"
      /> */}
			<h2 className="text-4xl">No ha canjeado cartas aún</h2>
			<p className="text-center text-2xl w-[80%] max-w-[800px]">
				Si quieres apoyar a Embeejayz y te gusta la recompensa ¡te esperamos en
				Twitch!
			</p>
			<EmbeeLink />
		</div>
	);
}
