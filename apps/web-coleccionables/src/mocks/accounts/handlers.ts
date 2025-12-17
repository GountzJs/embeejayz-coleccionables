import { HttpResponse, http } from "msw";
import { profileMap, rankingData } from "./data";

export const handlers = [
	http.get("http://localhost:4200/api/accounts/ranking", () => {
		return HttpResponse.json({
			data: rankingData,
		});
	}),
	http.get<{ username: string }>(
		"http://localhost:4200/api/accounts/:username",
		({ params }) => {
			const { username } = params;

			if (!(username in profileMap)) {
				return HttpResponse.json(
					{
						error: "Not found",
					},
					{ status: 404 },
				);
			}
			const data = profileMap[username as keyof typeof profileMap];

			return HttpResponse.json({
				data,
			});
		},
	),
];
