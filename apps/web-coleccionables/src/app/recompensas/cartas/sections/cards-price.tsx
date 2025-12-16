// biome-ignore assist/source/organizeImports: <Auto save import>
import { cdnUrl } from "@/core/settings";
import { BoxPoints } from "@modules/common/presentation/components/box-points";
import { DetailBits } from "@modules/common/presentation/components/detail-bits";
import { PriceBox } from "@modules/common/presentation/components/price-box";
import { PriceIlustration } from "@modules/common/presentation/components/price-ilustration";
import { PriceTitle } from "@modules/common/presentation/components/price-title";

export function CardsPrice() {
	return (
		<section className="flex items-center justify-center gap-15 py-6 w-full">
			<PriceIlustration />
			<article className="flex flex-col items-center gap-9 w-[600px]">
				<h1 className="text-2xl font-bold">¿Cómo canjear cartas?</h1>
				<PriceBox>
					<PriceTitle>Con puntos del canal</PriceTitle>
					<div className="flex gap-4 w-full">
						<BoxPoints
							points="100.000"
							detail="Cartas Aleatorias"
							color="rgb(0, 245, 147)"
						/>
						<p className="text-base font-regular">
							100.000 puntos del canal equivale al sobre chico con tres cartas.
						</p>
					</div>
				</PriceBox>
				<PriceBox>
					<PriceTitle>Donando bits</PriceTitle>
					<div className="flex items-center gap-4 pl-1 w-full">
						<DetailBits type="purple" quantity={300} />
						<p className="text-base font-regular">
							bits equivalen al sobre individual con una carta.
						</p>
					</div>
					<div className="flex items-center gap-4 pl-1 w-full">
						<DetailBits type="purple" quantity={800} />
						<p className="text-base font-regular">
							bits equivale al sobre chico con 3 cartas
						</p>
					</div>
					<div className="flex items-center gap-4 pl-1 w-full">
						<DetailBits type="green" quantity={1500} />
						<p className="text-base font-regular">
							bits equivale al sobre mediano con 6 cartas
						</p>
					</div>
					<div className="flex items-center gap-4 w-full">
						<DetailBits type="green" quantity={2400} />
						<p className="text-base font-regular">
							bits equivale al sobre grande con 12 cartas
						</p>
					</div>
				</PriceBox>

				<PriceBox>
					<PriceTitle>Regalando suscripciones</PriceTitle>
					<div className="flex items-center gap-4 w-full mb-3.5">
						<img
							src={`${cdnUrl}/images/icons/gifts-sub-5.png`}
							alt="Gifts Sub 5"
							width={77}
							height={40}
							loading="lazy"
							decoding="async"
						/>
						<p className="text-base font-regular">
							5 subs equivalen al sobre chico con tres cartas
						</p>
					</div>
					<div className="flex items-center gap-4 w-full mb-3.5">
						<img
							src={`${cdnUrl}/images/icons/gifts-sub-10.png`}
							alt="Gifts Sub 10"
							width={77}
							height={40}
							loading="lazy"
							decoding="async"
						/>
						<p className="text-base font-regular">
							10 subs equivalen al sobre mediano con seis cartas
						</p>
					</div>
					<div
						className="flex items-center gap-4 w-full mb-3.5"
						style={{ alignItems: "center", marginBottom: "14px" }}
					>
						<img
							src={`${cdnUrl}/images/icons/gifts-sub-20.png`}
							alt="Gifts Sub 20"
							width={77}
							height={40}
							loading="lazy"
							decoding="async"
						/>
						<p className="text-base font-regular">
							20 subs equivalen al sobre grande con doce cartas
						</p>
					</div>
				</PriceBox>

				<PriceBox>
					<PriceTitle>Suscribiendose</PriceTitle>
					<div className="flex items-center gap-4 w-full">
						<img
							src={`${cdnUrl}/images/icons/gift-sub-1.png`}
							alt="Gift Sub"
							width={40}
							height={44}
							loading="lazy"
							decoding="async"
						/>
						<p className="text-base font-regular">
							Una suscripción mensual o prime equivale al sobre individual con
							una carta.
						</p>
					</div>
				</PriceBox>
			</article>
		</section>
	);
}
