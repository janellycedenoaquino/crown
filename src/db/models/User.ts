import { Sequelize, Model, DataTypes, BuildOptions, Optional } from "sequelize";

import bcrypt from "bcryptjs";
import db from "../db";

export interface userAttributes {
  id: number; // Note that the `null assertion` `!` is required in strict mode.
  username: string;
  email: string;
  password: string;
  address: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface userInput extends Optional<userAttributes, "id"> {}
interface userOutput extends Required<userAttributes> {}

class User extends Model<userAttributes, userInput> implements userAttributes {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
  public address!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  encryptPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(5);
    return bcrypt.hash(password, salt);
  };
}
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING(),
      allowNull: false,
      unique: true,
    },
    password: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    address: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    sequelize: db,
    paranoid: true,
  }
);
//  function async correctPassword (inputPassword: string): Promise<boolean> {
//   return await bcrypt.compare(inputPassword, this.password);
// }

export const encryptPassword = async (user: userAttributes)=> {
    const salt = await bcrypt.genSalt(5);
    user.password = await bcrypt.hash(user.password, salt)
    // return bcrypt.hash(password, salt);
};
export default User;


  //awaiting new user

  // // User.beforeBulkCreate((users) => Promise.all(users.map(encryptPassword)));
  // const newUser = User.create({
  //   username: req.body.username,
  //   email: req.body.email,
  //   password: req.body.password,
  //   address: req.body.address,
  // });
  //  console.log(newUser)
  // // creating a token for the user
  // const token = jwt.sign(
  //   { id: newUser.id },
  //   process.env.TOKEN_KEY || "undefined"
  // );
  // //sending the user feedback
  // res.header("TOKEN: ", token).json(newUser);
  // res.json(newUser);

  // User.beforeCreate(encryptPassword);
  // User.beforeUpdate(encryptPassword);