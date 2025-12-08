import { createClient } from "@libsql/client";
import { dbToken, dbUrl } from "../core/settings";

const config = {
  url: dbUrl,
  authToken: dbToken,
};

export const turso = createClient(config);
