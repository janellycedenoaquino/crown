import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import auth from "./auth/index";
import api from "./api/index";
// import cors from "cors";
import {
  createProxyMiddleware,
  Filter,
  Options,
  RequestHandler,
} from "http-proxy-middleware";

export const app: Application = express();
const port = 3001;

//middlewares

// app.use(cors({ origin: "*" }));
app.use(morgan("dev"));
app.use(express.json());

//routes

app.use("/auth", auth);
app.use("/api", api);

app.use(
  "/auth",
  createProxyMiddleware({
    target: "http://localhost:3001",
    changeOrigin: true,
  }),
  auth
);
