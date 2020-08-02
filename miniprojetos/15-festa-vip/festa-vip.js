const CONVIDADOS = [
    convidadoFactory(
        'silvano', ['lucio', 'angela']
    ),

    convidadoFactory(
        'gustavo', ['adema', 'mark']
    ),
]

function convidadoFactory(nome, convidados) {
    return {
        nome,
        convidados
    }
}

function verifica() {
    const PESQUISA = document.getElementById('pesquisa');
    const NOME = document.querySelector('input[name=nome]').value.toLowerCase();
    const CONVIDOU = document.querySelector('input[name=convidou]').value.toLowerCase();

    for (let convidado of CONVIDADOS) {
        if (convidado.nome === CONVIDOU) {
            for (let nome of convidado['convidados']) {
                if (nome === NOME) {
                    PESQUISA.innerHTML = 'Pode entrar!';
                    return;
                }
            }
        }
    }

    PESQUISA.innerHTML = 'Não pode entrar!';
}