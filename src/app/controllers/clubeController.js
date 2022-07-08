const clubeService = require("../services/clubeService");

const controller = {
    index: (req, res) => {
    
    const listClube = clubeService.listClubeService();

    res.json(listClube);
    }
}

module.exports = controller;