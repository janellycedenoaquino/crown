import { Sequelize, Model, DataTypes, BuildOptions, Optional } from "sequelize";

import bcrypt from "bcryptjs";
import db from "../db";

interface userAttributes {
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

  public correctPassword(inputPassword: string) {
    return bcrypt.compare(inputPassword, this.password);
  }

  public encryptPassword = async (password: string): Promise<string> => {
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

export default User;
