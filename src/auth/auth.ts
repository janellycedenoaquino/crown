import User from "../db/models/User";
import express, { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

export const signIn = (req: Request, res: Response) => {
  console.log("this is req. body: ", req.body.username);
  res.send("sign in works");
};

export const signUp = async (req: Request, res: Response) => {
  console.log("this is req. body: ", req.body);
  const newUser = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    address: req.body.address,
  };
  await User.create(newUser);
  

  console.log("sign up works this is the user: ", newUser);
};

export const user = (req: Request, res: Response) => {
  res.send("user works");
};
