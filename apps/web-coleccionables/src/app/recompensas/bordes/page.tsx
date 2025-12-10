import { Disclaimer } from "@modules/common/presentation/components/disclaimer";
import { Presentation } from "./sections/presentation";

export default function Page() {
	return (
		<main className="flex flex-col items-center pb-6 w-full h-[calc(100vh-75px)] px-mobile md:px-tablet lg:px-desktop">
			<Presentation />
			<Disclaimer />
		</main>
	);
}
