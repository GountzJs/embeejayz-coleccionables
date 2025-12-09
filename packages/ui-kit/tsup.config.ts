import { copyFileSync, cpSync } from "node:fs";
import { defineConfig } from "tsup";

export default defineConfig((options) => ({
	entry: ["src/index.ts"],
	format: ["cjs", "esm"],
	dts: true,
	clean: true,
	sourcemap: true,
	target: "es2022",
	minify: !options.watch,
	async onSuccess() {
		cpSync("src/assets", "dist/assets", { recursive: true });
		copyFileSync("src/fonts.css", "dist/fonts.css");
		copyFileSync("src/styles.css", "dist/styles.css");
	},
}));
