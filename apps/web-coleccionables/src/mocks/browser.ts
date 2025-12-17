import { setupWorker } from "msw/browser";
import * as account from "./accounts/handlers";

export const worker = setupWorker(...account.handlers);
