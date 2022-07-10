const clubeModel = require("../models/clubeModel");

const criarClubeService = {
    criarClube: (
        id,
        nome,
        anoDeFundacao,
        estadio,
        cores,
        treinador,
        elenco
    ) => {
    const novoClube = new clubeModel(
        id,
        nome,
        anoDeFundacao,
        estadio,
        cores,
        treinador,
        elenco 
    );

        return novoClube;
    }
}

module.exports = criarClubeService;