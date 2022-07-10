const clubeModel = require("../models/clubeModel");
const arrClubes = require("../database/dados");

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
        return arrClubes.push(novoClube);
    }
}

module.exports = criarClubeService;