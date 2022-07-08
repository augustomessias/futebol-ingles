const clubeService = require("../services/listClubeService");

const controller = {
    index: (req, res) => {
        const listClube = clubeService.listClubeService();
        res.json(listClube);
    },
    listData: (req, res) => {
        const { nome } = req.query;
        const clube = clubeService.listClubeData(nome);
        return res.json(clube);
    }
}

module.exports = controller;