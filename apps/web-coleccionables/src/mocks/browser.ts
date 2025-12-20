import { setupWorker } from "msw/browser";
import * as account from "./accounts/handlers";
import * as border from "./borders/handlers";
import * as embeecard from "./embeecards/handlers";
import * as worlds2025 from "./worlds2025/handlers";

export const worker = setupWorker(
	...account.handlers,
	...border.handlers,
	...embeecard.handlers,
	...worlds2025.handlers,
);
