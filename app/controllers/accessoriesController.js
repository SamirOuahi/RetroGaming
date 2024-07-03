// eslint-disable-next-line no-unused-vars
const { Console, Brand, Game, Accessorie } = require("../models");

const accessoriesController = {
  async renderAccessoriesPage(req, res) {
    try{

      let params = {};
      if (req.query.console_id !== undefined) {
        params = { include: { association: "consoles", where: {id: req.query.console_id}}};
      }
      
      const accessories = await Accessorie.findAll(params);
      
      const consoles = await Console.findAll();

      res.render("accessories", { accessories, consoles } );
    } catch (error) {
      console.error(error);
      res.status(500).render("500");
    }
  },

  async oneAccessorie(req, res) {
    try{
      const id = req.params.id;
      const accessorie = await Accessorie.findByPk(id);

      res.render("accessorie", { accessorie });
    } catch (error) {
      console.error(error);
      res.status(500).render("500");
    }
   
  },

};

module.exports = accessoriesController;
