console.log("Objeto endereço");

function enderecoFactory(rua, cidade, cep) {

    return {
        rua,
        cidade,
        cep
    }
}

function exibirEndereco(endereco) {
    console.log('Propriedades do endereço:');
    for (let atributo in endereco) {
        console.log(atributo + " : " + endereco[atributo]);
    }
}

const endereco1 = enderecoFactory('Antonio de Barros', 'Garanhuns', '55291-420');

exibirEndereco(endereco1);