const { DataTypes, Model } = require("sequelize");
const sequelize = require("./sequelize-client");

class Console extends Model {}

Console.init(
  {
    name: DataTypes.TEXT,
    image: DataTypes.TEXT,
    brand_id: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    date: DataTypes.TEXT,
  },
  {
    sequelize,
    tableName: "console",
  }
);

module.exports = Console;
