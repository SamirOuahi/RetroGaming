const { Console, Brand } = require("../models");
// const {url} = require ("../../public/js/config");  


const consolesController = {
  async renderConsolesPage(req, res) {

    try {
      let params = {};
      if (req.query.brand_id !== undefined) {
        params = {where: {brand_id: req.query.brand_id}};
      } 

      const brands = await Brand.findAll({
        order: [['name', 'ASC']]
      });
      const consoles = await Console.findAll(params, {
        order: [['name', 'ASC']]
      });

      res.render("consoles", { consoles, brands });
    } catch (error) {
      console.error(error);
      res.status(500).render("500");
    }
  },

  async oneConsole(req, res) {
    try {
      const id = req.params.id;
      const console = await Console.findByPk(id);
      const brand = await Brand.findByPk(id);

      res.render("console", { console, brand });
    } catch (error) {
      console.error(error);
      res.status(500).render("500");
    }
  },

  async createConsole(req, res) {
    try {
      const {date,image,description} = req.body;
      const names = req.body.name;
      const nomBrand = names[0];
      const name = names[1];
      const result = JSON.stringify({name, date, image, description}); 
      // console.log(name);
      // console.log(nomBrand);
      // console.log(nomConsole);
      // console.log(date, image, description);
      console.log(result);
      
      if (!result) {
        res.status(400).json(result.error);
        return;
      }

      const data = await Console.create(result);
      const datas = await Brand.create(nomBrand);
      


      res.status(201).json( {data, datas } );
    } catch (error) {
      console.trace(error);
      res.status(500).send('Internal Server Error');
    }
  },
};

module.exports = consolesController;
