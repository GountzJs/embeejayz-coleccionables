// biome-ignore assist/source/organizeImports: <Auto save import>
import { cdnUrl } from "@/core/settings";
import embeecardPallet from "@modules/cards/presentations/consts/embeecard-pallet";

export function DetailCards() {
	const categories = [
		{ name: "T1", color: embeecardPallet.t1.light },
		{ name: "Embeejayz", color: embeecardPallet.embee.light },
		{ name: "Troll", color: embeecardPallet.troll.light },
		{ name: "Lolesports", color: embeecardPallet.lolesports.light },
		{ name: "Únicas", color: embeecardPallet.special.light },
	];

	return (
		<section className="flex justify-center flex-wrap gap-11 py-6 w-full">
			<article className="flex items-cneter flex-col gap-9 w-1/2">
				<h1 className="font-bold text-3xl text-center">EmbeeCards</h1>
				<img
					className="max-w-[600px]"
					src={`${cdnUrl}/images/cards/muestra.png`}
					alt="Embee Shaco circulo avatar"
					width={700}
					height={536}
					loading="lazy"
					decoding="async"
				/>
			</article>
			<div className="flex flex-col gap-4 mt-6 min-w-[300px] max-w-[450px]">
				<h3 className="text-center font-medium text-2xl w-full">Categorías</h3>
				<ul className="relative justify-center flex flex-wrap gap-4 w-full">
					{categories.map((category) => (
						<li
							key={category.name}
							className="relative items-center flex justify-center p-4 h-8 outline-2 rounded-md font-regular text-xl"
							style={{ outlineColor: category.color }}
						>
							{category.name}
						</li>
					))}
					<div className="absolute bottom-0 right-[15%] translate-y-[105%]">
						<img
							src={`${cdnUrl}/images/svgs/arrow-decorator.svg`}
							alt="Arrow decorator"
							width={60}
							height={136}
							loading="lazy"
							decoding="async"
						/>
						<p className="absolute text-xl rotate-30 translate-x-[28%] -translate-y-[15%] bottom-0 right-0 text-nowrap">
							<i>Fijate cuáles son!</i>
						</p>
					</div>
				</ul>
			</div>
		</section>
	);
}
