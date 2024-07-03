const Console = require("./Console");
const Accessorie = require("./accessorie");
const Brand = require("./brand");
const Game = require("./game");

// Console <-> Game (One-to-Many)
Game.belongsTo(Console, {
  foreignKey: "console_id",
  as: "console"
});

Console.hasMany(Game, {
  foreignKey: "console_id",
  as: "games"
});

// Console <-> Brand (One-to-Many)
Console.belongsTo(Brand, {
  foreignKey: "brand_id",
  as: "brand"
});
  
Brand.hasMany(Console, {
  foreignKey: "brand_id",
  as: "consolesb"
});

// Console <-> Accessorie (Many-toMany) 
Accessorie.belongsToMany(Console, {
  through: "console_has_accessorie",
  as: "consoles",
  foreignKey: "console_id"
});

Console.belongsToMany(Accessorie, {
  through: "console_has_accessorie",
  as: "accessories",
  foreignKey: "accessorie_id"
});



module.exports = { Console, Accessorie, Game, Brand };