function gerarAleatorios() {
    var numerosPossiveis = [];
    var sorteados = [];

    for (let i = 1; i <= 60; i++) {
        numerosPossiveis.push(i);
    }

    while(sorteados.length < 6) {
        var aleatorio = Math.floor(Math.random() * numerosPossiveis.length);

        var numeroEscolhido = numerosPossiveis[aleatorio];

        sorteados.push(numeroEscolhido);

        numerosPossiveis.splice(aleatorio, 1);
    }

    console.log("Meus Números sorteados:", sorteados);
}

gerarAleatorios();
