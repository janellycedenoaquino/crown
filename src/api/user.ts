import User from "../db/models/User";
import { Router, Request, Response, NextFunction } from "express";
const router: Router = Router();

export default router;

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ["password"] },
    });
    if (!users) {
      res.status(400).send("that User does not exist");
      return;
    }
    res.json(users);
  } catch (error) {
    res.send("there are no Users available");
    next(error);
  }
});

router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    // const Users = req.params.id
    const user = await User.findByPk(req.params.id, {
      attributes: { exclude: ["password"] },
    });
    if (!user) {
      res.status(400).send("that User does not exist");
      return;
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    // const Users = req.params.id
    const user = await User.findByPk(req.params.id);

    res.json(await user?.update(req.body));
  } catch (error) {
    next(error);
  }
});
router.delete(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // const Users = req.params.id
      const user = await User.findByPk(req.params.id);
      await user?.destroy();
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
