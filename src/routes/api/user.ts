import { Router } from "../../../deps.ts";

const router = new Router();

router.get("/me", (ctx) => {
    ctx.response.body = {
        msg: "TODO",
    };
    ctx.response.status = 501;
    return ctx;
});

router.put("/me", (ctx) => {
    ctx.response.body = {
        msg: "TODO",
    };
    ctx.response.status = 501;
    return ctx;
});

router.post("/login", (ctx) => {
    ctx.response.body = {
        msg: "TODO",
    };
    ctx.response.status = 501;
    return ctx;
});

router.post("/register", (ctx) => {
    ctx.response.body = {
        msg: "TODO",
    };
    ctx.response.status = 501;
    return ctx;
});

export { router };
