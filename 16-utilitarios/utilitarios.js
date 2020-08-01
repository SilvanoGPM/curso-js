console.log("Utilitários")

// Math

console.log(Math.random() * (100 - 90) + 90);

console.log(Math.max(
    100, 20, 30, 40, 100, 200
));

console.log(Math.min(
    100, 31, 3, 0, -1, -41, 40
));

console.log(Math.abs(-12.3));

console.log(Math.trunc(10.6));
console.log(Math.floor(10.6));
console.log(Math.round(10.6));

console.log(Math.sign(0));

// String
console.log("---------------------");

const msg = "Hello, World";
const objMsg = new String('World, Hello');

console.log(msg.indexOf('o'));
console.log(msg.lastIndexOf('o'));

console.log(objMsg.toLowerCase());
console.log(objMsg.toUpperCase());

// Template Literal
console.log("---------------------");

const nome = 'Silvano';
const mensagem = 
`Olá meu nome é ${nome}.

Como você vai?

Já cuidou "daquilo"?
`

console.log(mensagem);

// Date
console.log("---------------------");

const date1 = new Date();
const date2 = new Date('Sat Aug 03 2020');
const date3 = new Date(2004, 08, 04);

console.log(date3.toISOString());
