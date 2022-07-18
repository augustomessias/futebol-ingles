const clubeModel = require("../models/clubeModel");
const arrClubes = require("../database/dados");

const listarClubeService = {
    listarTodosOsClubes: () => {
        return arrClubes;
    },
    listarClubePeloNome: (clubeNome) => {
        const clubes = clubeService.listarTodosClubes();
        const clube = clubes.find(item => item.nome === clubeNome);
        return clube;
    },
    listarClubePeloId: (clubeId) => {
        const clubes = clubeService.listarTodosClubes();
        const clube = clubes.find(item => item.id === clubeId);
        return clube;
    }
}

module.exports = listarClubeService;