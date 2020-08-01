function contarAsteriscos(tamanho) {

    if (typeof tamanho === 'number') {
        let asteriscos = "";

        for (let i = 0; i < tamanho; i++) {
            asteriscos += "*";
            console.log(asteriscos);
        }

    } else {
        console.log("Isso não é um número");
    }

}

contarAsteriscos(10);