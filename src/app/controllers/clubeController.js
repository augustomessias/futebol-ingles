const clubeService = require("../services/clubeService");

const controller = {
    index: (req, res) => {
    
    const listClube = clubeService.listClubeService;

    res.json(clube);
    }
}

module.exports = controller;