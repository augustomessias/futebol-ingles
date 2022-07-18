const clubeModel = require("../models/clubeModel");
const arrClubes = require("../database/dados");

const listarClubeService = {
    listarTodosOsClubes: () => {
        return arrClubes;
    },
    listarClubePeloNome: (nome) => {
        const clubes = listarClubeService.listarTodosOsClubes();
        const clube = clubes.find(item => item.nome === nome);
        return clube;
    },
    listarClubePeloId: (id) => {
        const clubes = listarClubeService.listarTodosOsClubes();
        const clube = clubes.find(item => item.id === id);
        return clube;
    }
}

module.exports = listarClubeService;