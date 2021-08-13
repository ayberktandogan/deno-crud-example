import { yup } from "../../deps.ts";

export const signupSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
    name: yup.string().required(),
});
export const loginSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
});
