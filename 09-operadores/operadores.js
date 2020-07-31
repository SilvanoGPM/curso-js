console.log("Operadores");
console.log("------------");

console.log("Aritiméticos:");
// Aritiméticos
const ADICAO = 4 + 2; // Adição
const SUBTRACAO = 2 - 4; // Subtração
const MULTIPLICACAO = 4 * 2; // Multiplicação
const DIVISAO = 4 / 2; // Divisão
const EXPONENCIACAO = 2 ** 4; // Exponenciação
const MODULO = 10 % 1;

console.log("Adição: " + ADICAO);
console.log("Subtração: " + SUBTRACAO);
console.log("Multiplicação: " + MULTIPLICACAO);
console.log("Divisão: " + DIVISAO);
console.log("Exponenciação: " + EXPONENCIACAO);
console.log("Módulo: " + MODULO);
console.log("------------");

// Operadores de atribuição

let valor = 10; // Atribuição
valor += 10; // Atribuir e somar
valor -= 10; // Atribuir e subtrair
valor *= 10; // Atribuir e multiplicar
valor /= 10; // Atribuir e dividir
valor **= 2; // Atribuir e exponenciar
valor %= 2; // Atribuir e fazer o modulo

console.log("Igualdade:");
// Igualdade
console.log(1 == '1'); // Compara somente os valores
console.log(1 === '1'); // Compara os valores e o tipo
console.log("------------");

console.log("Ternário:");
// Ternário
let pontos = 99;
let tipo = pontos >= 100 ? 'Premium' : 'Comum' ;
console.log("Tipo do cliente: " + tipo);
console.log("------------");

console.log("Lógico");
// Lógico
let booleanTrue = true;
let booleanFalse = false;
console.log("Operador lógico AND: " + (booleanTrue && booleanFalse));
console.log("Operador lógico OR: " + (booleanTrue || booleanFalse));
console.log("Operador lógico NOT: " + (!booleanTrue));
console.log("------------");

// Valores Falsy
// 0
// ''
// false
// undefined
// null
// NaN

// Valores Thruthy
// Qualquer valor que não for Falsy
// > 0 ou < 0
// 'Strings Preenchidas'
// true

