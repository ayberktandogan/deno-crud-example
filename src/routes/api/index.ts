import { Router } from "../../../deps.ts";

const router = new Router();

router.get("/", (ctx) => {
    ctx.response.body = "xd";
    return ctx;
});

router.get("deneme", (ctx) => {
    ctx.response.body = {
        msg: "deneme",
    };
    return ctx;
});

export { router };
