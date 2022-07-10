const clubeModel = require("../models/clubeModel");
const arrClubes = require("../../database/database");

const clubeService = {
    listarTodosClubes: () => {
        const clube1 = new clubeModel(
            1,
            "Arsenal",
            1886,
            "Emirates Stadium",
            ["branco", "vermelho"],
            "Mikel Arteta",
            [
                "Ramsdale",
                "Tavares",
                "Gabriel",
                "Holding",
                "Soares",
                "Elneny",
                "Odegaard",
                "Xhaka",
                "Martinelli",
                "Nketiah",
                "Saka"
            ]
        )
        const clube2 = new clubeModel(
            2,
            "Fulham",
            1890,
            "Estádio do Fulham",
            ["branco", "preto"],
            "Buffon",
            [
                "Peter Cech",
                "Lampard",
                "Van Bommel"
            ]
        )

        return [clube1, clube2];
    },
    listarClubeNome: (nome) => {
        const clubes = clubeService.listarTodosClubes();
        const clube = clubes.find(item => item.nome === nome);
        return clube;
    },
    listarClubeId: (id) => {
        const clubes = clubeService.listarTodosClubes();
        const clube = clubes.find(item => item.id === id);
        return clube;
    },
    criarClube: (id, nome, anoDeFundacao, estadio, cores, treinador, elenco) => {
        const clube = { id, nome, anoDeFundacao, estadio, cores, treinador, elenco };
        return clube;
    }
}

module.exports = clubeService;