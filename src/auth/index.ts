import { Router, Request, Response } from "express";
import { signIn, signUp, user } from "./auth";
const router: Router = Router();

router.post("/signin", signIn);

router.post("/signup", signUp);

router.get("/user", user);

export default router;
