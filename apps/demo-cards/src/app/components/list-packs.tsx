import { sizePackEmbeecard } from "@embeejayz/core-cards";
import { ViewPack } from "./view-pack";

export function ListPacks() {
	const sobres = [
		{
			id: sizePackEmbeecard.individual,
			name: "Individual",
		},
		{
			id: sizePackEmbeecard.smallPack,
			name: "Chico",
		},
		{
			id: sizePackEmbeecard.mediumPack,
			name: "Mediano",
		},
		{
			id: sizePackEmbeecard.bigPack,
			name: "Grande",
		},
	];

	return (
		<ul className="flex gap-4 items-center justify-center flex-wrap w-full">
			{sobres.map(({ name, id }) => (
				<li key={name.toLowerCase()}>
					<ViewPack id={id} name={name} />
				</li>
			))}
		</ul>
	);
}
