import { ListRanking } from "@modules/accounts/presentation/components/list-ranking";

export default function Page() {
	return (
		<main className="flex flex-col items-center gap-12 pb-6 w-full min-h-[calc(100vh-75px)] px-mobile md:px-tablet lg:px-desktop">
			<h1 className="text-4xl font-black">Los pilares de nuestra comunidad.</h1>
			<ListRanking />
		</main>
	);
}
