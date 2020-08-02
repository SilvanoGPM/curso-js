console.log("Funções de Arrays");

const NUMS_ARRAY = [2, 3, 4, 5];
const PESSOAS_ARRAY = [
    {
        nome: 'Silvano', sobrenome: 'Gabriel'
    },
    {
        nome: 'Gustavo',
        sobrenome: 'Rocha'
    },
    {
        nome: 'Adema',
        sobrenome: null
    }
];


// Add Elementos em um Array

NUMS_ARRAY.unshift(0);
console.log(NUMS_ARRAY);

NUMS_ARRAY.splice(1, 0, 1);
console.log(NUMS_ARRAY);

NUMS_ARRAY.push(6);
console.log(NUMS_ARRAY);

// Encontrando Elemento

console.log(NUMS_ARRAY.indexOf(1));
console.log(NUMS_ARRAY.includes(3));

const NOME_PESQUISA = 'Adema';
console.log(PESSOAS_ARRAY.find(function (pessoa) {
    return pessoa.nome === NOME_PESQUISA;
}));

// Arrows Functions

console.log(PESSOAS_ARRAY.find(pessoa => pessoa.nome === NOME_PESQUISA));

// Removendo elementos do Array

console.log(NUMS_ARRAY.shift());
console.log(NUMS_ARRAY.pop());
console.log(NUMS_ARRAY.splice(2, 1));

console.log(NUMS_ARRAY);

// Combinar e Dividir Arrays 

const COMB_ARRAY = NUMS_ARRAY.concat(PESSOAS_ARRAY);
console.log(COMB_ARRAY);

const DIV1_ARRAY = NUMS_ARRAY.slice(1, 4);
console.log(DIV1_ARRAY);

const SPREAD_ARRAY = [...NUMS_ARRAY, PESSOAS_ARRAY];

console.log(SPREAD_ARRAY);

const CLONE_ARRAY = [...SPREAD_ARRAY];

console.log(CLONE_ARRAY);

// For Each

PESSOAS_ARRAY.forEach(
    item => console.log(item)
);

// Transformando array em string e string em array

const STR = CLONE_ARRAY.join('-');
console.log(STR);

const PALAVRA = 'Bom dia a todos';
const PALAVRAS_ARRAY = PALAVRA.split(' ');
console.log(PALAVRAS_ARRAY);


// Limpar Array

// NUMS_ARRAY.length = 0;