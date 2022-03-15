import User from "./models/User";
import Product from "./models/Product";
import Order from "./models/Order";
import ProductOrder from "./models/ProductOrder";
import db from "../db/db";

// associations btween models
// User.hasMany(Order);
// Order.belongsTo(User);
// Order.belongsToMany(Product, {
//   through: "ProductOrders",
//   foreignKey: "orderId",
// });
// Product.belongsToMany(Order, {
//   through: "ProductOrders",
//   foreignKey: "productId",
// });

export { db, User, Product, Order, ProductOrder };