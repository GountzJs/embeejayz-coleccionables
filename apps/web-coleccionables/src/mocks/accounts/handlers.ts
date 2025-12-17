import { HttpResponse, http } from "msw";
import { rankingData } from "./data";

export const handlers = [
	http.get("http://localhost:4200/api/accounts/ranking", () => {
		return HttpResponse.json({
			data: rankingData,
		});
	}),
	http.get("http://localhost:4200/api/accounts/:username", () => {
		return HttpResponse.json({
			data: {
				id: "055b8c07-1839-48d7-977b-48e85b58bfbd",
				avatar:
					"https://static-cdn.jtvnw.net/jtv_user_pictures/acec5321-f291-4f97-91c3-f62498d68dbd-profile_image-300x300.png",
				username: "Meldrekoski",
				total: {
					borders: 675,
					cards: 100,
					general: 775,
				},
			},
		});
	}),
];
