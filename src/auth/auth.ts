import User, { userAttributes } from "../db/models/User";
import express, { Request, Response } from "express";

interface signIn {}
interface signUp {}

export const signIn = (req: Request, res: Response) => {
  console.log("this is req. body: ", req.body);
  res.send("sign in works");
};

export const signUp = (req: Request, res: Response) => {
  console.log("this is req. body: ", req.body);
  const user: userAttributes = new User({
    id: 1,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    address: req.body.address,
  });
  res.send("sign up works");
};

export const user = (req: Request, res: Response) => {
  res.send("user works");
};
