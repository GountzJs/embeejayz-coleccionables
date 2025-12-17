import { HttpResponse, http } from "msw";
import { rankingData } from "./data";

export const handlers = [
	http.get("http://localhost:4200/api/accounts/ranking", () => {
		return HttpResponse.json({
			data: rankingData,
		});
	}),
];
