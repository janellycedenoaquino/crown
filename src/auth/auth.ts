import User, { encryptPassword } from "../db/models/User";
import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
export const signIn = (req: Request, res: Response) => {
  console.log("this is req. body: ", req.body.username);
  res.send("sign in works");
};

export const signUp = async (req: Request, res: Response) => {
  //before we create/update the user
  User.beforeCreate(encryptPassword);
  User.beforeUpdate(encryptPassword);

  //before the new user is created
  const newUser = await User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    address: req.body.address,
  });

  // creating a token for the user
  const token = jwt.sign(
    { id: newUser.id },
    process.env.TOKEN_KEY || "undefined"
  );

  console.log('this is the token sent to header', token )
  //sending the user feedback
  res.header(["TOKEN: ", token]).json({"this works": "just fine"});

};

export const user = (req: Request, res: Response) => {
  res.send("user works");
};
