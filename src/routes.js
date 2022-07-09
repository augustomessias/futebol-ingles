const Router = require("express");
const routes = new Router();

const controller = require("./app/controllers/clubeController");

routes.get("/clubes", controller.clubes);

module.exports = routes;