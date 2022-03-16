import Product from "../db/models/Product";
import { Router, Request, Response, NextFunction } from "express";
const router: Router = Router();

export default router;

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const products = await Product.findAll();
    if (!products) {
      res.status(400).send("that product does not exist");
      return;
    }
    res.json(products);
  } catch (error) {
    res.send("there are no products available");
    next(error);
  }
});

router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    // const products = req.params.id
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      res.status(400).send("that product does not exist");
      return;
    }
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    // const products = req.params.id
    const product = await Product.findByPk(req.params.id);

    res.json(await product?.update(req.body));
  } catch (error) {
    next(error);
  }
});
router.delete(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // const products = req.params.id
      const product = await Product.findByPk(req.params.id);
      await product?.destroy();
      res.json(`item was deleted`);
    } catch (error) {
      next(error);
    }
  }
);

// if no other works
router.use(( req: Request, res: Response, next: NextFunction) => {
  res
    .status(404)
    .send("You look a little lost there...this page does not exist");
  const error = Error("DNE");
  next(error);
});
