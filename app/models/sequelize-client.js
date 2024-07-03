require("dotenv/config");

const { Sequelize } = require('sequelize');

// Créer une instance de connexion à notre BDD Postgres
// Equivalent du new pg.Client() (en version Sequelize)
const sequelize = new Sequelize(process.env.PG_URL, {
  define: {
    createdAt: "created_at", // Rajouter le mapping createdAt (Sequelize) -> created_at (Postgres) pour TOUS les modèles !
    updatedAt: "updated_at"
  }
});

module.exports = sequelize;
