const clubeModel = require("../models/clubeModel");
const arrClubes = require("../database/dados");

const criarClubeService = {
    criarNovoClube: (
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