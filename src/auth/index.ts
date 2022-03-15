import { Router, Request, Response } from "express";
const router: Router = Router();

router.use("/", (req: Request, res: Response) => {
  res.send("this is from the auth route");
});

export default router;
