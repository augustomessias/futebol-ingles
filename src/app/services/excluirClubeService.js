const listarClubeService = require("../services/listarClubeService");
const { listarTodosClubes } = require("../services/listarClubeService");
const clubeService = require("../services/listarClubeService");

const excluirClubeService = {
    excluir: (id) => {
        const clubes = listarClubeService.listarTodosClubes();
        const clubeIndice = clubes.findIndex(item => item.id === Number(id));

        if(clubeIndice === -1) {
            return { erro: "Clube não encontrado."};
        }

        clubes.splice(clubeIndice, 1);

        return { mensagem: "Clube não encontrado."};
    }
}