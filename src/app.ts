import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import auth from "./auth/index";
// import api from './api/index'
export const app: Application = express();
const port = 3001;

//middlewares
app.use(morgan("dev"));
//routes
app.use("/auth", auth);
// app.use("/api", api);

app.get("/", (req: Request, res: Response) => {
  res.send("hola mundo! had to start over =( ");
});
