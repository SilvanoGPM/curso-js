let nome = "Silvano";
let soma = 0;

function resetaNome() {
    nome = null;
};

function somar(n, m) {
    soma = n + m;
}

console.log(nome);
resetaNome();
console.log(nome);

somar(10, 20);
console.log(soma);
