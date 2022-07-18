const Router = require("express");
const routes = new Router();

const controller = require("./app/controllers/clubeController");

routes.get("/clubes", controller.listarClubes);
routes.get("/clubenome", controller.clubeNome);
routes.get("/clubeid", controller.clubeId);
routes.post("/novoclube", controller.novoClube);

module.exports = routes;