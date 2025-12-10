import { LoadingPage } from "@modules/common/presentation/components/loading-page";
import { Suspense } from "react";
import { Route, Routes } from "react-router";
import { HomePage } from "./pages/home";
import { NotFound } from "./pages/not-found";
import { Footer } from "./templates/footer";
import { Header } from "./templates/header";

export function Root() {
	return (
		<div className="bg-gray-ultra-dark text-white flex flex-1 flex-col font-poppins min-h-full w-full max-w-screen overflow-x-hidden">
			<Header />
			<Routes>
				<Route
					path="/"
					element={
						<Suspense fallback={<LoadingPage />}>
							<HomePage />
						</Suspense>
					}
				/>
				<Route
					path="*"
					element={
						<Suspense fallback={<LoadingPage />}>
							<NotFound />
						</Suspense>
					}
				/>
			</Routes>
			<Footer />
		</div>
	);
}
