const { Router } = require("express");

const homeController = require("./controllers/homeController");
const consolesController = require("./controllers/consolesController");
const gamesController = require("./controllers/gamesController");
const accessoiresController = require("./controllers/accessoriesController");

const router = Router();

router.get("/", homeController.renderHomePage);

// Routes Console
router.get("/consoles", consolesController.renderConsolesPage);
router.get("/consoles/:id", consolesController.oneConsole);
router.post("/consoles", consolesController.createConsole);

// Routes Games
router.get("/games", gamesController.renderGamesPage);
router.get("/games/:id", gamesController.oneGame);

// Routes Accessories
router.get("/accessories", accessoiresController.renderAccessoriesPage);
router.get("/accessories/:id", accessoiresController.oneAccessorie);

module.exports = router;
