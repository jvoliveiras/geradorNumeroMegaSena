function gerarAleatoriosOtimizado() {
    const sorteados = [];
    const numerosPossiveis = Array.from({ length: 60 }, (_, i) => i + 1); 

    while (sorteados.length < 6) {
        const aleatorio = Math.floor(Math.random() * 60);
        if (numerosPossiveis[aleatorio] !== undefined) {
            sorteados.push(numerosPossiveis[aleatorio]);
            numerosPossiveis[aleatorio] = undefined; 
        }
    }

    console.log("Números sorteados:", sorteados);
}

gerarAleatoriosOtimizado();
