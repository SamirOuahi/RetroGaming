const { DataTypes, Model } = require('sequelize');
const sequelize = require("./sequelize-client");

class Brand extends Model {}

Brand.init({
  name: DataTypes.TEXT,

}, {
  sequelize,
  tableName: "brand",
});

module.exports = Brand;