const clubeService = require("../services/clubeService");

const controller = {
    clubes: (req, res) => {
        const clubes = clubeService.listarTodosClubes();
        res.json(clubes);
    },
    clubeNome: (req, res) => {
        const { nome } = req.query;
        const clubeNome = clubeService.listarClubeNome(nome);
        return res.json(clubeNome);
    },
    clubeId: (req, res) => {
        const { id } = req.query;
        const clubeId = clubeService.listarClubeId(id);
        return res.json(clubeId);
    }
}

module.exports = controller;