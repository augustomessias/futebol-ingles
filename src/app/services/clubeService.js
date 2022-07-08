const clubeModel = require("../models/clubeModel");

const clubeService = {
    listClubeService: () => {
        const clube = new clubeModel(
            1,
            "Arsenal",
            1886,
            "Emirates Stadium",
            ["branco", "vermelho"]  
        )

        return [clube];
    }
}

module.exports = clubeService;