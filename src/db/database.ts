import { Database, PostgresConnector, config } from "../../deps.ts";

const env = config();

const connection = new PostgresConnector({
  host: env.DB_HOST || "localhost",
  username: env.DB_USERNAME || "username",
  password: env.DB_PASSWORD || "password",
  database: env.DB_DATABASE || "deno-crud",
});

const db = new Database(connection);

export {db};