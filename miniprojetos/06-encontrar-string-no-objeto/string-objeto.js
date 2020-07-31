function encontrarPropriedades(obj) {

    if (typeof obj === 'object' && obj !== null) {

        for (let props in obj) {
            if (typeof obj[props] === 'string') {
                console.log(props + ": " + obj[props])
            }
        }

    } else {
        console.log("Não é um objeto ou está nulo!");
    }

}

const PESSOA = {
    nome: 'Silvano',
    sobrenome: 'Gabriel',
    idade: 15,
    cep: 655561,
    email: "test@gmail.com",
    serie: "1* A"
}

encontrarPropriedades(PESSOA);