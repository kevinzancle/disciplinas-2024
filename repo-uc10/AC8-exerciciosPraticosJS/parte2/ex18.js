/*
Exercício 18: Organizador de Contatos
Crie um objeto que funcione como uma agenda de contatos simples. O objeto deve ter arrays para diferentes categorias de contatos (amigos, família, trabalho) e um método para mostrar os contatos de uma categoria específica.
*/

const agenda = {
    amigos: ["Alice", "Bruno"],
    familia: ["Carlos", "Diana"],
    trabalho: ["Eduardo", "Fernanda"],
    mostrarContatos(categoria) {
      return this[categoria] || [];
    }
  };
  
  console.log(`Contatos de Amigos: ${agenda.mostrarContatos("amigos")}`);
  