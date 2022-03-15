import User from "../db/models/User";
import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const signIn = (req: Request, res: Response) => {
  console.log("this is req. body: ", req.body.username);
  res.send("sign in works");
};

export const signUp = async (req: Request, res: Response) => {
  console.log("this is req. body: ", req.body);
  const newUser =  await User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    address: req.body.address,
  });
  // console.log(newUser, `this is the new user's id: ${newUser.id}`)

  const token = jwt.sign({id: newUser.id }, process.env.TOKEN_KEY || 'undefined')
  res.header('TOKEN: ', token).json(newUser);
};

export const user = (req: Request, res: Response) => {
  res.send("user works");
};
