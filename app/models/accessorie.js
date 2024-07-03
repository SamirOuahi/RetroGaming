const { DataTypes, Model } = require('sequelize');
const sequelize = require("./sequelize-client");

class Accessorie extends Model {}

Accessorie.init({
  name: DataTypes.TEXT,
  image: DataTypes.TEXT,
  console: DataTypes.TEXT,
  description: DataTypes.TEXT,
  date: DataTypes.TEXT,
    
}, {
  sequelize,
  tableName: "accessorie",
});

module.exports = Accessorie;