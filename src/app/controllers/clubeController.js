const clubeModel = require("../models/clubeModel");

const atualizarClubeService = require("../services/atualizarClubeService");
const criarClubeService = require("../services/criarClubeService");
const excluirClubeService = require("../services/excluirClubeService");
const listarClubeService = require("../services/listarClubeService");
const arrClubes = require("../database/dados");

const controller = {
    todosClubes: (req, res) => {
        const clubes = listarClubeService.listarTodosOsClubes();
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
    },
    novoClube: (req, res) => {
        const { id, nome, anoDeFundacao, estadio, cores, treinador, elenco } = req.query;
        const novoClube = new clubeModel(id, nome, anoDeFundacao, estadio, cores, treinador, elenco);
        arrClubes.push(novoClube);
        return res.json(novoClube);
    }
}

module.exports = controller;