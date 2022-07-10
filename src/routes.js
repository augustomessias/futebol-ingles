const Router = require("express");
const routes = new Router();

const controller = require("./app/controllers/clubeController");

routes.get("/clubes", controller.clubes);
routes.get("/clubenome", controller.clubeNome);
routes.get("/clubeid/:id", controller.clubeId);

module.exports = routes;