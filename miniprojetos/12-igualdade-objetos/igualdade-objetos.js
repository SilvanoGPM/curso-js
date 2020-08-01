function Endereco(rua, cidade, cep) {
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}

function atributosIguais(obj1, obj2) {

    for (let attributo in obj1) {

        if (obj1[attributo] !== obj2[attributo]) {
            return false;
        }

    }

    return true;
}

function equals(obj1, obj2) {
    return obj1 === obj2;
}

const end1 = new Endereco('Antonio de Barros', '55291-400', 'Gag');
const end2 = new Endereco('Antonio de Barros', '55291-400', 'Gag');

console.log(atributosIguais(end1, end2));

console.log(equals(end1, end2));



