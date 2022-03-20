import Order from "../db/models/Order";
import Product from "../db/models/Product";
import ProductOrder from "../db/models/ProductOrder";
import { Router, Request, Response, NextFunction } from "express";
const router: Router = Router();

export default router;

router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const cart = await Order.findOne({
      where: {
        id: req.params.id,
        completed: false,
      },
      include: Product,
    });
    res.status(200).send(cart);
  } catch (error) {
    res.send("there are no products available");
    next(error);
  }
});

router.post("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const order = await Order.findOne({
      where: {
        id: req.params.id,
        completed: false,
      },
      include: Product,
    });
    let prodOrder;
    if (order === null) {
      let newOrder = await Order.create({
        id: Number(req.params.id),
        completed: false,
      });
      console.log(req.body)

    //   prodOrder = await ProductOrder.create({
    //     where: {
    //       orderId: newOrder.id,
    //       productId: req.body.id,
    //     }
    // })

      res.status(200).send(order);
    }
  } catch (error) {
    res.send("there are no products available");
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
router.use((req: Request, res: Response, next: NextFunction) => {
  res
    .status(404)
    .send("You look a little lost there...this page does not exist");
  const error = Error("DNE");
  next(error);
});
