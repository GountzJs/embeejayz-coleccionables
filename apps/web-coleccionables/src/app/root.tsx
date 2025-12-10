import { LoadingPage } from "@modules/common/presentation/components/loading-page";
import { Footer } from "@modules/common/presentation/templates/footer";
import { Header } from "@modules/common/presentation/templates/header";
import { Suspense } from "react";
import { Route, Routes } from "react-router";
import { HomePage } from ".";
import { NotFound } from "./not-found";

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
