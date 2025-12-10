// biome-ignore assist/source/organizeImports: Auto save import
import { cdnUrl } from "@/core/settings";
import { BoxPoints } from "@modules/common/presentation/components/box-points";
import { DetailBits } from "@modules/common/presentation/components/detail-bits";
import { PriceBox } from "@modules/common/presentation/components/price-box";
import { PriceIlustration } from "@modules/common/presentation/components/price-ilustration";
import { PriceTitle } from "@modules/common/presentation/components/price-title";

export function BordersPrice() {
	return (
		<section className="flex items-center justify-center flex-col xl:flex-row py-6 gap-15 w-full">
			<PriceIlustration />
			<article className="flex flex-col items-center gap-8 w-[600px]">
				<h1 className="text-2xl font-bold">¿Cómo canjear bordes?</h1>
				<PriceBox>
					<PriceTitle>Con puntos del canal</PriceTitle>
					<div className="flex items-center flex-col lg:flex-row gap-4 w-full">
						<BoxPoints
							points="20.000"
							detail="Borde Clasificatorio aleatorio"
							color="rgb(92, 22, 197)"
						/>
						<p className="font-regular text-base text-wrap max-w-3/4">
							20.000 puntos del canal equivale a un borde aleatorio.
						</p>
					</div>
				</PriceBox>
				<PriceBox>
					<PriceTitle>Donando bits</PriceTitle>
					<div className="flex gap-4 items-center pl-1 w-full">
						<DetailBits type="purple" quantity={100} />
						<p className="font-regular text-base">
							bits equivale a un borde aleatorio. <br />
							Las donaciones deben hacerse en un solo envío.
						</p>
					</div>
				</PriceBox>

				<PriceBox>
					<PriceTitle>Regalando suscripciones</PriceTitle>
					<div className="flex gap-4 w-full items-center mt-3.5">
						<img
							src={`${cdnUrl}/images/icons/gifts-sub-5.png`}
							alt="Gifts Sub 5"
							width={77}
							height={40}
							loading="lazy"
							decoding="async"
						/>
						<p className="font-regular text-base">
							Regalando una sub o más puedes obtener uno o más bordes
							aleatorios. Son personales, no se pueden obsequiar.
						</p>
					</div>
				</PriceBox>

				<PriceBox>
					<PriceTitle>Por participar de los streams</PriceTitle>
					<div className="flex items-center gap-4 mt-3.5 w-full">
						<img
							src={`${cdnUrl}/images/icons/competitive.png`}
							alt="Tournaments Iconos"
							width={150}
							height={40}
							loading="lazy"
							decoding="async"
						/>
						<p className="font-regular text-base">
							Por estar en las retransmisiones del competitivo se obtiene un
							borde del enfrentamiento, solo disponible durante las partidas.
						</p>
					</div>
				</PriceBox>
			</article>
		</section>
	);
}
