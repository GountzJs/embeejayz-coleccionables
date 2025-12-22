// biome-ignore assist/source/organizeImports: <auto save order>
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	root: import.meta.dirname,
	cacheDir: "../../node_modules/.vite/apps/overlay-notifications",
	server: {
		port: 3000,
	},
	preview: {
		port: 3000,
		host: "localhost",
	},
	plugins: [
		react({
			babel: {
				plugins: [["babel-plugin-react-compiler"]],
			},
		}),
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
