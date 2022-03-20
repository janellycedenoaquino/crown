import { Router, Request, Response } from "express";
import products from "./products";
import users from "./user";
import cart from "./cart";
// import cart from "./productO";
const router: Router = Router();
export default router;

router.use("/users", users);
router.use("/products", products);
router.use("/cart", cart)
// router.use("/orders", orders)
