/*
Exercício 36: Sistema de Playlist Musical
Nível: Intermediário

Crie um sistema de playlist que permita:
1. Adicionar e remover músicas
2. Organizar por artista, álbum ou gênero
3. Criar playlists personalizadas
4. Gerar recomendações baseadas em preferências
*/

let musicas = [];
let playlists = {};

function adicionarMusica(titulo, artista, album, genero) {
    musicas.push({ titulo, artista, album, genero });
}

function removerMusica(titulo) {
    musicas = musicas.filter(musica => musica.titulo !== titulo);
}

function organizarPor(categoria) {
    return [...musicas].sort((a, b) => a[categoria].localeCompare(b[categoria]));
}

function criarPlaylist(nome, criterios) {
    playlists[nome] = musicas.filter(musica => {
        return Object.keys(criterios).every(chave => musica[chave] === criterios[chave]);
    });
}

function gerarRecomendacoes(generoPreferido) {
    return musicas.filter(musica => musica.genero === generoPreferido);
}

adicionarMusica("Song 1", "Artist A", "Album X", "Pop");
adicionarMusica("Song 2", "Artist B", "Album Y", "Rock");
adicionarMusica("Song 3", "Artist A", "Album X", "Pop");
adicionarMusica("Song 4", "Artist C", "Album Z", "Jazz");

console.log("Organizado por artista:", organizarPor("artista"));
criarPlaylist("Favoritas", { genero: "Pop" });
console.log("Playlist Favoritas:", playlists["Favoritas"]);
console.log("Recomendações para gênero 'Rock':", gerarRecomendacoes("Rock"));
removerMusica("Song 2");
console.log("Músicas após remoção:", musicas);
