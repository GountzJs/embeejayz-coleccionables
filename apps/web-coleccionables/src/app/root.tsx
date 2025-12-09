import { Suspense } from "react";
import { Route, Routes } from "react-router";
import { HomePage } from "./pages/home";

export function Root() {
	return (
		<div className="bg-gray-ultra-dark text-white flex flex-1 flex-col font-poppins h-auto min-h-full w-full">
			<Routes>
				<Route
					path="/"
					element={
						<Suspense fallback={<div>Loading...</div>}>
							<HomePage />
						</Suspense>
					}
				/>
			</Routes>
		</div>
	);
}
