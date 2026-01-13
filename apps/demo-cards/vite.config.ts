// biome-ignore assist/source/organizeImports: <auto save order>
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import sitemap from "vite-plugin-sitemap";

// https://vite.dev/config/
export default defineConfig({
	root: import.meta.dirname,
	cacheDir: "../../node_modules/.vite/apps/demo-cards",
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
		sitemap({
			hostname: "https://cards.tomasjs.com",
			dynamicRoutes: ["/"],
			readable: true,
			generateRobotsTxt: false,
			exclude: ["/404"],
		}),
	],
	resolve: {
		alias: [
			{
				find: "@",
				replacement: resolve(__dirname, "src"),
			},
		],
	},
});
