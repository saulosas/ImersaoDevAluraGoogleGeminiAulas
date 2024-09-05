//console.log(atletas);

let section = document.getElementById("resultados-pesquisa");

//console.log(section);

for(let atleta of atletas){
  section.innerHTML += `
  <div class="item-resultado">
    <h2>${atleta.titulo}</h2>
    <p class="descricao-meta">${atleta.descricao}</p>
    <a href="${atleta.link}" target="_blank">Sáiba mais sobre ${atleta.titulo}.</a>
  </div>
  `
}


/*  Função para pegar o que for escrito no campo de busca
const campoBusca = document.getElementById('campoBusca');
const btnPesquisar = document.getElementById('btnPesquisar');

btnPesquisar.addEventListener('click', () => {
    const valorBusca = campoBusca.value;
    //Testando valor no campo de Pesquisa::
    console.log('Você digitou:', valorBusca);
  });
  */
 

/*let resultadosBusca = document.getElementById('resultados-busca');

atletas.forEach(atleta => {
  let card = document.createElement('div');
  card.classList.add('atleta-card'); // Adiciona uma classe para estilização

  let titulo = document.createElement('h2');
  titulo.textContent = atleta.titulo;
  card.appendChild(titulo);

  let descricao = document.createElement('p');
  descricao.textContent = atleta.descricao;
  card.appendChild(descricao);

  let link = document.createElement('a');
  link.href = atleta.link;
  link.textContent = 'Saiba mais';
  card.appendChild(link);

  resultadosBusca.appendChild(card);
});*/
