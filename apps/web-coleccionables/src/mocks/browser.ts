import { setupWorker } from "msw/browser";
import * as account from "./accounts/handlers";
import * as border from "./borders/handlers";

export const worker = setupWorker(...account.handlers, ...border.handlers);
