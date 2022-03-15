//product model
import { Sequelize, Model, DataTypes, BuildOptions, Optional } from "sequelize";
import { Association } from "sequelize";
import db from "../db";
// const User = require('./User')

interface productAttributes {
  id: number; // Note that the `null assertion` `!` is required in strict mode.
  name: string;
  image: string;
  price: number;
  description: string;
  stock: number;
}

interface productInput extends Optional<productAttributes, "id"> {}
interface productOutput extends Required<productAttributes> {}

class Product
  extends Model<productAttributes, productInput>
  implements productAttributes
{
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public name!: string;
  public image!: string;
  public price!: number;
  public description!: string;
  public stock!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    image: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    price: {
      type: new DataTypes.INTEGER(),
      allowNull: false,
    },
    description: {
      type: new DataTypes.STRING(300),
      allowNull: false,
    },
    stock: {
      type: new DataTypes.INTEGER(),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    sequelize: db,
    paranoid: true,
  }
);

export default Product;
