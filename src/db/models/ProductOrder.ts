// //productOrder model
import db from "../db";
//productOrder model
import { Sequelize, Model, DataTypes, BuildOptions, Optional, Association } from "sequelize";
// const User = require('./User')

interface productOrderAttributes {
  id: number; // Note that the `null assertion` `!` is required in strict mode.
  orderId: number;
  productId: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface productOrderInput extends Optional<productOrderAttributes, "id"> {}
interface productOrderOutput extends Required<productOrderAttributes> {}

class ProductOrder
  extends Model<productOrderAttributes, productOrderInput>
  implements productOrderAttributes
{
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public orderId!: number;
  public productId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
ProductOrder.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    orderId: {
      type: new DataTypes.INTEGER(),
      allowNull: false,
    },
    productId: {
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

export default ProductOrder;
