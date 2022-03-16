// import Sequelize from "sequelize";
const sequelize = require("sequelize");

const dbName = "crown";

const db = new sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${dbName}`,
  {
    loggin: false,
  }
);

export default db;
