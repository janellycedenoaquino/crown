//order model
import { Sequelize, Model, DataTypes, BuildOptions, Optional } from "sequelize";
import { Association } from "sequelize";
import db from "../db";
// import User from './User'

interface orderAttributes {
  id: number; // Note that the `null assertion` `!` is required in strict mode.
  completed: boolean;
}

interface orderInput extends Optional<orderAttributes, "id"> {}
export interface orderOutput extends Required<orderAttributes> {}

class Order
  extends Model<orderAttributes, orderInput>
  implements orderAttributes
{
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public completed!: boolean;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    completed: {
      type: new DataTypes.STRING(),
      defaultValue: false,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    sequelize: db,
    paranoid: true,
  }
);

export default Order;
