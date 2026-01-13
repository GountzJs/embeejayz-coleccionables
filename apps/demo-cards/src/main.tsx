// biome-ignore assist/source/organizeImports: Autosave import
import { PackProvider } from "@/app/contexts/pack/pack.provider.tsx";
import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app/app.tsx";
import "./index.css";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
	<React.StrictMode>
		<PackProvider>
			<App />
		</PackProvider>
	</React.StrictMode>,
);
