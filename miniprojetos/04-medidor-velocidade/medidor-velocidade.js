function medirVelocidade(velocidade) {
    const VELOCIDADE_MAX = 70;
    const PONTO_POR_KM = 5;

    if (velocidade <= VELOCIDADE_MAX) {
        console.log("Velocidade ok");
    } else {
        const kmsAcima = velocidade - VELOCIDADE_MAX;

        const pontos = Math.floor(kmsAcima / PONTO_POR_KM);

        if (pontos > 12) console.log("Carteira suspensa");
        else console.log("Pontos: " + pontos);

    }

}

medirVelocidade(114);