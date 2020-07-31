console.log("Repetição")

// For

console.log("Contando até 5 com for");
for (let i = 0; i < 5; i++) {
    console.log(i + 1);
}

// While

console.log("Contando até 5 com while");
let i = 1;
while (i <= 5) {
    console.log(i)
    i++;
}

// Do while

console.log("Contando até 5 com do while");
i = 1;
do {
    console.log(i);
    i++
} while (i <= 5);

// For In

console.log("Iterando sobre um array com for in ");
const PESSOA = {
    nome: 'Silvano',
    idade: 15
}

for (let key in PESSOA) {
    console.log(PESSOA[key]);
}

// For Of

console.log("Iterando sobre um array com for of")
const ARRAY = [1, 2, 3, 4, 5];

for (let value of ARRAY) {
    console.log(value);
}