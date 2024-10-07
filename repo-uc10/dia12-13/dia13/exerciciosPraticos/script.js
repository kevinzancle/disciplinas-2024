const biblioteca = {
    livros: [],
    adicionarLivro(titulo, autor, anoPublicacao) {
        this.livros.push({ titulo, autor, anoPublicacao });
    },
    buscarPorAutor(autorBusca) {
        return this.livros.filter(livro => livro.autor === autorBusca);
    }
};

biblioteca.adicionarLivro("Your name", "Makoto Shinkai", 2016);

const makoto = biblioteca.buscarPorAutor("Makoto Shinkai");
console.log(makoto); 