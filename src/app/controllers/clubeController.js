const clubeModel = require("../models/clubeModel");

const controller = {
    index: (req, res) => {
        const clube = new clubeModel(
            id: 1,
            nome: "Arsenal",
            anoDeFundacao: 1886,
            estadio: "Emirates Stadium",
            cores: ["branco", "vermelho"]
        )

        res.json(clube);
    }
}