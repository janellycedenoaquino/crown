import { Sequelize, Model, DataTypes, BuildOptions, Optional } from "sequelize";
import {
  HasManyGetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyHasAssociationMixin,
  Association,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin,
} from "sequelize";
import db from "../db";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";

// const SALT_ROUNDS = 5;

export interface userAttributes {
  id: number;
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
  static authenticate: any;
  static findByToken: (token: any, ProcessEnvJWT: any) => Promise<User | null>;
  constructor() {
    super();
  }

  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
  public address!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  //   public correctPassword(inputPassword: string) {
  //     return bcrypt.compare(inputPassword, this.password);
  //   }

  //   public generateToken(ProcessEnvJWT: any) {
  //     //process.env.JWT
  //     return jwt.sign({ id: this.id }, ProcessEnvJWT);
  //   }
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

export default  User;

// User.authenticate = async function ({ username, password }: any) {
//   const user = await User.findOne({ where: { username } });
//   if (!user || !(await user.correctPassword(password))) {
//     const error = Error("Incorrect username/password");
//     throw error;
//   }
//   return user.generateToken(process.env.jwt);
// };
