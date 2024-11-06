const url= "https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json";

async function visualizarinformacoesGlobais() {
  const res = await fetch (url)
  const dados = await res.json()
  console.log(dados);


}

visualizarinformacoesGlobais();
const paragrafo = document.createelement('p')
paragrafo.classlist.add('graficos-container_texto')
paragrafo.innerHTML = `voce sabia que o mundo tem <span> $ {pessoanomundo} bilĥoes/
