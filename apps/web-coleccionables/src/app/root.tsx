import { WrapperSuspense } from "@modules/common/presentation/components/wrapper-suspense";
import { Footer } from "@modules/common/presentation/templates/footer";
import { Header } from "@modules/common/presentation/templates/header";
import { Route, Routes } from "react-router";
import { HomePage } from ".";
import { ClasificatoriaPage } from "./clasificatoria";
import { LoadingRankingPage } from "./clasificatoria/loading";
import { NotFound } from "./not-found";
import { BordersPage } from "./recompensas/bordes";
import { CardsPage } from "./recompensas/cartas";

export function Root() {
	return (
		<div className="bg-gray-ultra-dark text-white flex flex-1 flex-col font-poppins min-h-full w-full max-w-screen overflow-x-hidden">
			<Header />
			<Routes>
				<Route path="/" element={<WrapperSuspense element={<HomePage />} />} />
				<Route
					path="/clasificatoria"
					element={
						<WrapperSuspense
							element={<ClasificatoriaPage />}
							fallback={<LoadingRankingPage />}
						/>
					}
				/>
				<Route
					path="/recompensas/bordes"
					element={<WrapperSuspense element={<BordersPage />} />}
				/>
				<Route
					path="/recompensas/cartas"
					element={<WrapperSuspense element={<CardsPage />} />}
				/>
				<Route path="*" element={<WrapperSuspense element={<NotFound />} />} />
			</Routes>
			<Footer />
		</div>
	);
}
