const Router = require("express");
const routes = new Router();

const controller = require("./app/controllers/clubeController");

routes.get("/clubes", controller.clubes);
routes.get("/clubenome", controller.clubeNome);

module.exports = routes;