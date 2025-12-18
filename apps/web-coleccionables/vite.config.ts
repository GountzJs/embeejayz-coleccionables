// biome-ignore assist/source/organizeImports: <auto save order>
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	root: import.meta.dirname,
	cacheDir: "../../node_modules/.vite/apps/web-coleccionables",
	server: {
		port: 4200,
	},
	preview: {
		port: 4200,
		host: "localhost",
	},
	plugins: [
		react({
			babel: {
				plugins: [["babel-plugin-react-compiler"]],
			},
		}),
		tailwindcss(),
	],
	resolve: {
		alias: [
			{
				find: "@",
				replacement: resolve(__dirname, "src"),
			},
			{
				find: "@modules",
				replacement: resolve(__dirname, "modules"),
			},
		],
	},
});
