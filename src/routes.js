const Router = require("express");
const routes = new Router();

const controller = require("./app/controllers/clubeController");

routes.get("/clubes", controller.index);

module.exports = routes;