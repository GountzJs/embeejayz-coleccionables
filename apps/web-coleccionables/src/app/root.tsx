import { WrapperSuspense } from "@modules/common/presentation/components/wrapper-suspense";
import { ScrollUp } from "@modules/common/presentation/lib/scroll-up/scroll-up";
import { Footer } from "@modules/common/presentation/templates/footer";
import { Header } from "@modules/common/presentation/templates/header";
import { Route, Routes } from "react-router";
import { HomePage } from ".";
import { UserBordersPage } from "./[username]";
import { EmbeeCardsPage } from "./[username]/embeecards";
import { LoadingEmbeeCardsPage } from "./[username]/embeecards/loading";
import { UserLayout } from "./[username]/layout";
import { LoadingBordersPage } from "./[username]/loading";
import { Worlds2025Page } from "./[username]/worlds2025";
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
				<Route path="/usuarios/:username" element={<UserLayout />}>
					<Route
						index
						element={
							<WrapperSuspense
								element={<UserBordersPage />}
								fallback={<LoadingBordersPage />}
							/>
						}
					/>
					<Route
						path="embeecards"
						element={
							<WrapperSuspense
								element={<EmbeeCardsPage />}
								fallback={<LoadingEmbeeCardsPage />}
							/>
						}
					/>
					<Route
						path="worlds2025"
						element={<WrapperSuspense element={<Worlds2025Page />} />}
					/>
				</Route>
				<Route path="*" element={<WrapperSuspense element={<NotFound />} />} />
			</Routes>
			<Footer />
			<ScrollUp />
		</div>
	);
}
