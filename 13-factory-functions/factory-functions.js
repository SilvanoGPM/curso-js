console.log("Factory Functions");

function pessoaFactory(nome, sobrenome, idade, serie) {
    return {
        nome,
        sobrenome,
        idade,
        serie,
        
        falar() {
            console.log("Olá, meu nome é " + this.nome + " " + this.sobrenome + ", tenho " + this.idade + " anos e minha serie é " + this.serie + ".");
        }
    }
}

const pessoa1 = pessoaFactory(
    "Silvano",
    "Pimentel",
    15,
    "1* A",
);

console.log(pessoa1.falar());