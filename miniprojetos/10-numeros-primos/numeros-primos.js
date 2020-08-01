function mostrarNumerosPrimos(number) {

    for (let i = 2; i <= number; i++) {
        if (verificaSeEhPrimo(i)) console.log(i);
    }

}

function verificaSeEhPrimo(numero) {
    for (let divisivel = 2; divisivel < numero; divisivel++) {
        if (numero % divisivel === 0) {
            return false;
        }
    }

    return true;
}

mostrarNumerosPrimos(15);