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
interface correctPassword extends User {}

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

  encryptPassword = async (user: userAttributes) => {
    const salt = await bcrypt.genSalt(5);
    user.password = await bcrypt.hash(user.password, salt);
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
      // validate: {
      //   isEmail: true,
      // },
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
export const encryptPassword = async (user: userAttributes) => {
  const salt = await bcrypt.genSalt(5);
  user.password = await bcrypt.hash(user.password, salt);
};

export default User;
