export function Disclaimer() {
	return (
		<article className="flex flex-col items-center justify-center gap-2.5 my-11.5 w-[800px] outline-2 outline-primary rounded-2xl px-3 py-6">
			<p className="font-bold text-xl text-center w-full text-pretty text-primary">
				Aviso importante:
			</p>
			<p className="text-center text-sm font-regular text-pretty w-full">
				Las recompensas obtenidas en esta plataforma son recompensas
				coleccionables y{" "}
				<i className="font-semibold">no tienen valor monetario real</i>. No
				pueden ser comprados, vendidos, intercambiados ni canjeados por dinero,
				bienes o servicios, ni dentro de esta aplicación ni fuera de ella. Esta
				plataforma{" "}
				<i className="font-semibold">no está afiliada, respladada ni operada</i>{" "}
				por Riot Games. League of Legends &#174; y todos sus activos son
				propiedad de Riot Games, Inc.
			</p>
		</article>
	);
}
