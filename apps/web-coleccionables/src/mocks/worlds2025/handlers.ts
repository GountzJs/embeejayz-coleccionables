// biome-ignore assist/source/organizeImports: <Autosave import>
import json from "@/assets/data/user-stickers.json";
import { apiUrl } from "@/core/settings";
import { HttpResponse, http } from "msw";

export const handlers = [
	http.get(`${apiUrl}/worlds2025/users/:id/stickers`, () => {
		return HttpResponse.json({ data: json.data });
	}),
];
