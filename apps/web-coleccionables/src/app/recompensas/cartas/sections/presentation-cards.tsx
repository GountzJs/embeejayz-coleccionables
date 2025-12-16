import { cdnUrl } from "@/core/settings";

export function PresentationCards() {
	return (
		<section className="flex justify-center flex-col flex-1 gap-5 py-12 h-[calc(100vh-75px)] w-full">
			<h1 className="text-4xl font-bold text-center w-full">
				¡Las cartas de nuestra comunidad!
			</h1>
			<div className="flex gap-5 items-center justify-evenly mt-6 w-full">
				<article className="flex flex-col gap-4 items-center max-w-1/2">
					<h2 className="font-semibold text-xl">¿Cómo funcionan las cartas?</h2>
					<p className="font-regular text-base text-pretty">
						Las cartas de categorías comunes se obtienen al{" "}
						<i className="font-semibold">donar bits</i> en el stream, con
						excepción de las de categoría única, que se{" "}
						<i className="font-semibold">regalan</i> a los presentes del stream
						durante eventos especiales.
					</p>
					<p className="font-regular text-base text-pretty">
						Según la <i className="font-semibold">cantidad</i> de bits donados,
						se pueden canjear{" "}
						<i className="font-semibold">
							distintos tamaños de sobres de cartas
						</i>
						, las cartas son aleatorias y pueden repetirse. <br />
						Cada una puede salirte hasta{" "}
						<i className="font-semibold">5 veces</i>, mientras más repetidas, se
						le otorga una mayor exclusividad al interactuar con ella. A esta
						capacidad de repetirse la llamamos{" "}
						<i className="font-semibold">Nivel de Holografía</i>.
					</p>
				</article>
				<img
					src={`${cdnUrl}/images/avatars/embee-circle.webp`}
					alt="Embee Shaco circulo avatar"
					width={400}
					height={373}
					loading="eager"
					decoding="sync"
				/>
			</div>
		</section>
	);
}
