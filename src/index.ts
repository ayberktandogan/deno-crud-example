import { Application, bgGreen, black, config } from "../deps.ts";
import { db } from "./db/database.ts";
import Models from "./db/models/index.ts";
import { IUser } from "./types/IUser.ts";
import logger from "https://deno.land/x/oak_logger@1.0.0/mod.ts";
import router from "./routes.ts";

// Import and export .env
config({ export: true });

// Start oak server
const app = new Application<{
    user: Omit<IUser, "password"> | null;
}>({ logErrors: true });

// Import logger middleware
app.use(logger.logger);
app.use(logger.responseTime);

// Define routes
app.use(router.routes());

await db.link(Models);
await db.sync({ drop: true });
console.log(bgGreen(black("Database connection has been established")));

console.log(bgGreen(black("Server started on port 8000")));
await app.listen("127.0.0.1:8000");
