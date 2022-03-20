import User, { encryptPassword } from "../db/models/User";
import express, { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const signIn = async (req: Request, res: Response) => {
  // console.log("this is req.body: ", req.body.email); //insomia app
  // [1] this is req.body:  janesds312@email.com insomnia response
  console.log("this is req.body: ", req.body.body["email"]);
  //web response [1] this is req.body:  a@gmail.com

  //finding user with that email
  const currentUser = await User.findOne({
    where: { email: req.body.body["email"] },
  });
  console.log("this is the current user: ", currentUser);
  if (!currentUser) {
    res
      .status(401)
      .send("This user isnt registered please sign up to create an account");
    return;
  } else {
    const correctPassword = await bcrypt.compare(
      req.body.body["password"],
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
      let headerAndUser = {
        TOKEN: token,
        currentUser
      }
      console.log("this is the token sent to header", token);
      // res.header("TOKEN: ", token).json(currentUser);
      res.header({ TOKEN: token }).status(200).send(headerAndUser);
      return;
    }
    return res.status(401).json("invalid credentials");
  }

  // return res.status(401).json("invalid credentials password");
  // res.header(["TOKEN: ", token]).json(currentUser);
};

export const signUp = async (req: Request, res: Response) => {
  console.log("this is the req.body from the backend: ", req.body.body);

  //before we create/update the user
  User.beforeCreate(encryptPassword);
  User.beforeUpdate(encryptPassword);
  //before the new user is created
  const newUser = await User.create(req.body.body);

  // creating a token for the user
  const token = jwt.sign(
    { id: newUser.id },
    process.env.TOKEN_KEY || "undefined"
  );

  console.log("this is the token sent to header", token);
  //sending the user feedback
  res.send({ TOKEN: token });
};

export const user = async (req: Request, res: Response) => {
  console.log("we here!!!! auth/user: header:    ", req.header);
  console.log("we here!!!! auth/user: body:  ", req.body);
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
