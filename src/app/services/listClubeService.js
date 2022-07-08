const clubeModel = require("../models/clubeModel");

const listClubeService = {
    listClubeService: () => {
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
    listClubeData: (clubeNome) => {
        const clubeList = clubeService.listClubeService();
        const clube = clubeList.find(item => item.nome === nome);
        return clube;
    }
}

module.exports = listClubeService;