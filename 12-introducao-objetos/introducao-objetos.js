console.log("Introdução a objetos");

const mp3 = {
    musicas: [
        "VmZ - Bad Girl",
        "Rodrigo Zin - Darling",
        "Lucas ART - Frio do Inverno"
    ],
    fone: {
        marca: "Samsung",
        cor: "Branco",
        tamanho: "80cm"
    },
    ligar: function ligar() {
        console.log("Bem vindo ao mp3 genérico!");
        console.log("Escolha uma música");
        this.ligado = true;
    },
    desligar: function desligar() {
        console.log("Desligando mp3 genérico!");
        console.log("Adeus, até uma próxima");
        this.ligado = false;
        this.musicaTocando = "";
    },
    tocar: function tocar(musicaEscolhida) {
        if (this.ligado) {
            for (let musica of this.musicas) {
                if (musica.includes(musicaEscolhida)) this.musicaTocando = musica;
            }
            console.log("Música tocando: " + this.musicaTocando);
        } else {
            console.log("Aparelho desligado");
        }
    },
    listar: function listar() {
        if (this.ligado) {
            console.log("Músicas: ");
            for (let musica of this.musicas) {
                console.log(musica);
            }
        } else {
            console.log("Aparelho desligado");
        }
    },
    ligado: false,
    fonePlugado: false,
    musicaTocando: "",
    dono: "Silvano",
    cor: "Cinza"
}

console.log(mp3.ligar());
console.log(mp3.desligar());
console.log(mp3.tocar("VmZ"));
console.log(mp3.listar());