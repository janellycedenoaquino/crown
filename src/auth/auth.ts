import User, { encryptPassword } from "../db/models/User";
import express, { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const signIn = async (req: Request, res: Response) => {
  console.log("this is req.body: ", req.body);
  //finding user with that email
  const currentUser = await User.findOne({
    where: { email: req.body.email },
  });

  if (!currentUser) {
    res
      .status(401)
      .send("This user isnt registered please sign up to create an account");
    return;
  } else {
    const correctPassword = await bcrypt.compare(
      req.body.password,
      currentUser.password
    );

    if (correctPassword) {
      // creating a token for the user
      const token = jwt.sign(
        { id: currentUser.id },
        process.env.TOKEN_KEY || "undefined",
        {
          expiresIn: "10h",
        }
      );
      console.log("this is the token sent to header", token);

      // res.header("TOKEN: ", token).json(currentUser);
      res.header({ TOKEN: token }).status(200).send(currentUser);
      return;
    }
    return res.status(401).json("invalid credentials");
  }
  //password validate

  // return res.status(401).json("invalid credentials password");
  // res.header(["TOKEN: ", token]).json(currentUser);
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

  console.log("this is the token sent to header", token);
  //sending the user feedback
  res.header({ TOKEN: token }).json(newUser);
};

export const user = async (req: Request, res: Response) => {
  const token = req.header("TOKEN");
  if (!token) {
    res.status(401).send("nope not todayyy shawty!");
  } else if (token) {
    const validated = jwt.verify(token, process.env.TOKEN_KEY || "undefined");
    //returns an id
    if (typeof validated === "object") {
      console.log("th value of validated: ", validated.id);
      let theUser = await User.findByPk(validated.id);
      console.log(theUser);
      res.send(`okayyy I see you ${theUser?.username}`);
    }
    // console.log("the token! ", token);
  }
};

//declaration merging is a thing!!!!
