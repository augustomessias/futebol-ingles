const clubeService = require("../services/listarClubeService");

const controller = {
    clubes: (req, res) => {
        const clubes = clubeService.listarTodosClubes();
        res.json(clubes);
    },
    clubeNome: (req, res) => {
        const { nome } = req.query;
        const clubeNome = clubeService.listarClubeNome(nome);
        return res.json(clubeNome);
    }
}

module.exports = controller;