function exibirTipo(number) {

    for (let i = 0; i <= number; i++) {
        if (i % 2 !== 0) console.log(i, "Impar");
        else console.log(i, "Par");
    }

}