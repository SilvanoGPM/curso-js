function somar(number) {

    let soma = 0;

    for (let i = 0; i <= number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            soma += i;
        }
    }

    console.log(soma);

}

somar(10);