import { Router } from "../deps.ts";
import { router as IndexRoute } from "./routes/api/index.ts";
import { router as UserRoute } from "./routes/api/user.ts";
const router = new Router({ prefix: "/api/v1" });

router.use("/", IndexRoute.routes());
router.use("/user", UserRoute.routes());

export default router;
