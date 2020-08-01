const FAIXAS1 = [
    {
        tooltip: 'até R$400',
        minimo: 0,
        maximo: 400
    }, 
    {
        tooltip: 'de R$400 até R$600',
        minimo: 400,
        maximo: 600
    },
    {
        tooltip: 'de R$600 até R$1000',
        minimo: 600,
        maximo: 1000
    },
]

const FAIXAS2 = [
    faixaFactory('de R$1000 até R$1200', 1000, 12000),
    faixaFactory('de R$1200 até R$1400', 1200, 1400)
]

const FAIXAS3 = [
    new Faixa('de R$1400 até R$1600', 1400, 1600)
]

function faixaFactory(tooltip, minimo, maximo) {

    return {
        tooltip,
        minimo,
        maximo
    }
}

function Faixa(tooltip, minimo, maximo) {
    this.tooltip = tooltip,
    this.maximo = maximo,
    this.minimo = minimo
}