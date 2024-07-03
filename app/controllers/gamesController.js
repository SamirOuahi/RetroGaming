const { Console, Brand, Game } = require("../models");

const gamesController = {
  async renderGamesPage(req, res) {

    try{

      let params = {};
      if (req.query.console_id !== undefined) {
        params = {where: {console_id: req.query.console_id}};
      } 
      
      
      const games = await Game.findAll(params, {
        order: [['name', 'ASC']]
      });
      const consoles = await Console.findAll({
        order: [['name', 'ASC']]
      });
      const brands = await Brand.findAll({
        order: [['name', 'ASC']]
      });
      res.render("games", { games, brands, consoles });
    } catch (error) {
      console.error(error);
      res.status(500).render("500");
    }
   
  },

  async oneGame(req, res) {
    try{
      const id = req.params.id;
      const game = await Game.findByPk(id);
      const brand = await Brand.findByPk(id);

      res.render("game", { game, brand });
    } catch (error) {
      console.error(error);
      res.status(500).render("500");
    }
   
  },
 
};

module.exports = gamesController;
