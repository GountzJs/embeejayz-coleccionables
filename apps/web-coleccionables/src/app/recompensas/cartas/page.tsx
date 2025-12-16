import { Disclaimer } from "@modules/common/presentation/components/disclaimer";
import { CardsPrice } from "./sections/cards-price";
import { DetailCards } from "./sections/detail-cards";
import { ListPacks } from "./sections/list-pack";
import { PresentationCards } from "./sections/presentation-cards";

export default function Page() {
	return (
		<main className="flex flex-col items-center pb-6 w-full min-h-[calc(100vh-75px)] px-mobile md:px-tablet lg:px-desktop">
			<PresentationCards />
			<Disclaimer />
			<DetailCards />
			<ListPacks />
			<CardsPrice />
		</main>
	);
}
