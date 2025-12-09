import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app/app.tsx";
import "./index.css";

async function enableMocking() {
	const isDevMode = import.meta.env.VITE_PUBLIC_NODE_ENV === "development";

	if (!isDevMode) return;

	const { worker } = await import("./mocks/browser");

	return worker.start();
}

const root = createRoot(document.getElementById("root") as HTMLElement);

enableMocking()
	.then(() => {
		root.render(
			<StrictMode>
				<App />
			</StrictMode>,
		);
	})
	.catch(() => {
		throw new Error("Failed init mocks");
	});
