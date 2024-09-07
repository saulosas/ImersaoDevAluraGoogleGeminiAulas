//Função chamada ao clicar no botão PESQUISAR / mostrará resultado baseado no valor do campo de pesquisa
function pesquisar(){
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  console.log(campoPesquisa);

  //Verificando se o campo de pesquisa está vazio
  if(!campoPesquisa){
    section.innerHTML = "<p>Nada foi encontrado na base de dados. Digite a sua busca pelo atleta ou esporte.</p>"
    return;
  }
  //transformando o valor da variável campoPesquisa para lowecase, para efeito de comparação
  campoPesquisa = campoPesquisa.toLowerCase();

  //Declarando variáveis para manipular dentro do laço FOR
  let resultado = "";
  let titulo = "";
  let descricao = "";
  let tags = "";
  for(let atleta of atletas){
    titulo = atleta.titulo.toLowerCase();
    descricao = atleta.descricao.toLowerCase();
    tags = atleta.tags.toLowerCase();

    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
      resultado += `
      <div class="item-resultado">
        <h2>${atleta.titulo}</h2>
        <p class="descricao-meta">${atleta.descricao}</p>
        <a href="${atleta.link}" target="_blank">Saiba mais sobre ${atleta.titulo}.</a>
      </div>
      `
    }
  }

  //Verifica se não há valor como resultado e retorna uma mensagem ao usuário.
  if(!resultado){
    resultado = "<p>Nada foi encontrado na base de dados. Tente outro.</p>"
  }
  section.innerHTML = resultado;

}