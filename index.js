require("dotenv/config");
const express = require("express");
const router = require("./app/router");
const middleware404 = require("./middlewares/middleware404");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.set("view engine", "ejs");
app.set("views", "./app/views");


app.use(express.static("./public"));

app.use(router);

app.use(middleware404);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Server listening at http://localhost:${port}`);
});
