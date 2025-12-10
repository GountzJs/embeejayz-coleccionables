export function Presentation() {
	return (
		<section className="flex justify-center flex-col flex-1 gap-5 py-12 h-[calc(100vh-75px)] w-full">
			<h1 className="font-bold text-4xl text-center w-full">
				¡Los bordes de nuestra comunidad!
			</h1>
			<div className="flex items-center gap-5 justify-evenly mt-6 w-full">
				<article className="flex flex-col items-center gap-4 w-1/2">
					<h2 className="font-bold text-2xl">¿Cómo funcionan los bordes?</h2>
					<p className="font-regular text-xl text-pretty">
						Con un marco clasificatorio basado en la cantidad de bordes
						repetidos,{" "}
						<strong>se adapta a tu avatar y usuario de Twitch</strong>, además
						de incluir hechizos <strong>personalizables</strong>.
					</p>
					<p className="font-regular text-xl text-pretty">
						Son coleccionables con los distintos{" "}
						<i className="font-medium">proplayers</i> que han dejado su huella
						en la escena competitiva, destacando sus mejores momentos en
						diversas competencias internacionales y locales.
					</p>

					<p className="font-regular text-xl text-pretty">
						Los marcos poseen la clasificación de la temporada 7: Challenger,
						Maestro, Diamante, Platino, Oro, Plata y Bronce.
					</p>
				</article>
			</div>
		</section>
	);
}
