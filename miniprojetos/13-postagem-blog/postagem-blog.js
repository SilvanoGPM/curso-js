function postagemFactory(titulo, mensagem, autor, visualizacoes, comentarios, estaAoVivo) {

    return {
        titulo,
        mensagem,
        autor,
        visualizacoes,
        comentarios,
        estaAoVivo,

        comentar(autor, mensagem) {
            comentarios.push(comentarioFactory(autor, mensagem));
        }
    }
}

function Comentario(autor, mensagem) {
    this.autor = autor;
    this.mensagem = mensagem;
}

const POSTAGEM1 = postagemFactory(
    'Primeira Postagem',
    'Olá a todos, primeira postagem.',
    'SkyG0D',
    20,
    [
        new Comentario('Anônimo1', 'Olá!'),

        new Comentario('Silvano', 'Bem vindo')
    ],
    true
);

