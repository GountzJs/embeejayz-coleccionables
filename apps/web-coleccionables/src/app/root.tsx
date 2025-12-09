import { Suspense } from "react";
import { Route, Routes } from "react-router";
import { HomePage } from "./pages/home";
import { NotFound } from "./pages/not-found";
import { Footer } from "./templates/footer";
import { Header } from "./templates/header";

export function Root() {
	return (
		<div className="bg-gray-ultra-dark text-white flex flex-1 flex-col font-poppins min-h-full w-full">
			<Header />
			<Routes>
				<Route
					path="/"
					element={
						<Suspense fallback={<div>Loading...</div>}>
							<HomePage />
						</Suspense>
					}
				/>
				<Route
					path="*"
					element={
						<Suspense fallback={<div>Loading...</div>}>
							<NotFound />
						</Suspense>
					}
				/>
			</Routes>
			<Footer />
		</div>
	);
}
