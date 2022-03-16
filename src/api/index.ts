import { Router, Request, Response } from "express";
import products from "./products";
const router: Router = Router();
export default router;


// router.use("/users", users)
router.use("/products", products);
// router.use("/orders", orders)

