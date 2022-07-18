function clubeModel(
    id,
    nome,
    anoDeFundacao,
    estadio,
    cores,
    treinador,
    elenco
    ) {
    this.id = id;
    this.nome = nome;
    this.anoDeFundacao = anoDeFundacao;
    this.estadio = estadio;
    this.cores = cores;
    this.treinador = treinador;
    this.elenco = elenco;
}

module.exports = clubeModel;