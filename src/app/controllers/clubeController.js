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

        if(!nome) {
            return res.status(400).json({ "erro": "O nome do clube não foi fornecido." })
        }

        const clube = listarClubeService.listarClubePeloNome(nome);
        return res.json(clube);
    },
    clubeId: (req, res) => {
        const { id } = req.query;
        
        if(!id) {
            return res.status(400).json({ "erro": "O id do clube não foi fornecido." });
        }

        const clube = listarClubeService.listarClubePeloId(id);
        return res.json(clube);
    },
    novoClube: (req, res) => {
        const { id,
            nome,
            anoDeFundacao,
            estadio,
            cores,
            treinador,
            elenco
        } = req.query;
        
        const clube = criarClubeService.criarNovoClube(
            nome,
            anoDeFundacao,
            estadio,
            cores,
            treinador,
            elenco
        );

        return res.json(clube);
    }
}

module.exports = controller;