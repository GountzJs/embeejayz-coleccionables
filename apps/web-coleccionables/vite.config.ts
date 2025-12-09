// biome-ignore assist/source/organizeImports: <auto save order>
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react({
			babel: {
				plugins: [["babel-plugin-react-compiler"]],
			},
		}),
		tailwindcss(),
	],
	server: {
		port: 3000,
	},
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
