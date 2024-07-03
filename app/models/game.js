const { DataTypes, Model } = require('sequelize');
const sequelize = require("./sequelize-client");

class Game extends Model {}

Game.init({
  name: DataTypes.TEXT,
  image: DataTypes.TEXT,
  machine: DataTypes.TEXT,
  console_id: DataTypes.INTEGER,
  description: DataTypes.TEXT,
  date: DataTypes.TEXT,
    
}, {
  sequelize,
  tableName: "game",
});

module.exports = Game;