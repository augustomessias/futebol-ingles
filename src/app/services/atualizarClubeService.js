const listarClubeService = require("../services/listarClubeService");

const atualizarClubeService = {
    atualizar: (
        id,
        nome,
        anoDeFundacao,
        estadio,
        cores,
        treinador,
        elenco
    ) => {
        const clubes = listarClubeService.listarTodosClubes();
        const clubeIndice = clubes.findIndex(item => item.id === Number(id));

        if(clubeIndice === -1) {
            return { erro: "Clube não encontrado."};
        }

        clubes[clubeIndice] = {
            id,
            nome,
            anoDeFundacao,
            estadio,
            cores,
            treinador,
            elenco
        }

        return {
            id,
            ...clubes[clubeIndice]
        }
    }
}

module.exports = atualizarClubeService;