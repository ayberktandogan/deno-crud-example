import { Router } from "../../../deps.ts";
import { createUser } from "../../handlers/dao/user.dao.ts";

const router = new Router();

router.get("/me", (ctx) => {
    ctx.response.body = {
        msg: "TODO",
    };
    ctx.response.status = 501;
});

router.put("/me", (ctx) => {
    ctx.response.body = {
        msg: "TODO",
    };
    ctx.response.status = 501;
});

router.post("/login", (ctx) => {
    ctx.response.body = {
        msg: "TODO",
    };
    ctx.response.status = 501;
});

router.post("/register", async (ctx) => {
    const body = await ctx.request.body().value;

    ctx.response.body = {
        msg: "TODO",
    };
    ctx.response.status = 501;
});

export { router };
