import { createClient } from "@libsql/client";
import { dbToken, dbUrl } from "../core/settings";

if (!dbUrl || !dbToken) {
  throw new Error("Missing environment variables");
}

export const turso = createClient({
  url: dbUrl,
  authToken: dbToken,
});
