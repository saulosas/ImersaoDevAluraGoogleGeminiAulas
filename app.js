// Função chamada ao clicar no botão PESQUISAR / mostrará resultado baseado no valor do campo de pesquisa
function pesquisar() {
  // Obtém a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // Obtém o valor digitado no campo de pesquisa e converte para minúsculas
  let campoPesquisa = document.getElementById("campo-Pesquisa").value.toLowerCase();

  // Verifica se o campo de pesquisa está vazio
  if (!campoPesquisa) {
    // Se estiver vazio, exibe uma mensagem de erro na seção de resultados
    section.innerHTML = "<p>Nada foi encontrado na base de dados. Digite a sua busca pelo atleta ou esporte.</p>";
    return; // Interrompe a função
  }

  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultado = "";

  // Itera sobre cada atleta na lista de atletas
  for (let atleta of atletas) {
    // Converte os dados do atleta para minúsculas para otimizar a comparação
    let titulo = atleta.titulo.toLowerCase();
    let descricao = atleta.descricao.toLowerCase();
    let tags = atleta.tags.toLowerCase();

    // Verifica se o termo de pesquisa está presente no título, descrição ou tags do atleta
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Se o atleta corresponder à pesquisa, adiciona um novo elemento HTML à string de resultados
      resultado += `
        <div class="item-resultado">
          <h2>${atleta.titulo}</h2>
          <p class="descricao-meta">${atleta.descricao}</p>
          <a href="${atleta.link}" target="_blank">Saiba mais sobre ${atleta.titulo}.</a>
        </div>
      `;
    }
  }

  // Verifica se nenhum resultado foi encontrado
  if (!resultado) {
    // Se nenhum resultado foi encontrado, exibe uma mensagem de erro na seção de resultados
    resultado = "<p>Nada foi encontrado na base de dados. Tente outro.</p>";
  }

  // Atualiza o conteúdo da seção de resultados com os resultados da pesquisa
  section.innerHTML = resultado;
}