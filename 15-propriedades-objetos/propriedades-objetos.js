console.log("Propriedades dos Objetos");

// Objetos são dinâmicos

const copo = {
    cor: 'Azul',
    capacidade: 1000
}

copo.formato = 'Redondo';
console.log(copo.formato);

delete copo.formato;
console.log(copo.formato);

// Objetos são clonaveis

const copoClonado1 = Object.assign({formato: 'Quadrado'}, copo);
console.log(copoClonado1);

const copoClonado2 = {...copo};
console.log(copoClonado2);