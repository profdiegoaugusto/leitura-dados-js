
let pokemons = []

const URL_BASE = "data/pokemons.json" 

async function carregarDados() {

    try {

        const resposta = await fetch(URL_BASE);

        if (!resposta.ok)
            throw new Error("Não foi possível carregar os dados!")

        pokemons = await resposta.json();

        explorarDados(pokemons);
        criarTabela("#container");

    } catch (error) {
        
        alert(error);
        console.error(error);
    }
}


function explorarDados(pokemons) {

    console.log(pokemons);

    // Obter quantidade de dados carregados
    let n = pokemons.length;
    console.log(`${n} Pokémons carregados.`);

    // Obter propriedades dos Pokémons
    let atributosPokemons = Object.keys(pokemons[0]);
    console.log(atributosPokemons);

    // Imprimir Número e Nome dos Pokémons da 1 Geração
    for (let i = 0; i < n; i++) {
        
        if (pokemons[i].geracao == 1)
            console.log(`${pokemons[i].id} - ${pokemons[i].nome}`);
    }

    // Pesquisa por um pokémon
    let pikachu = pokemons.find((d) => { return d.nome == "Pikachu"; });
    console.log(pikachu);

    //  Pokémons que possuem o peso entre 100kg e 500kg
    let pesquisaPeso = pokemons.filter((d) => {
        return (d.peso_kg >= 100 && d.peso_kg <= 500);
    });

    console.log(pesquisaPeso);

    // Ordenar Crescente por Nome
    pesquisaPeso.sort((a, b) => { return a.nome.localeCompare(b.nome); });
    console.log(pesquisaPeso);

    // Ordenar Descrescente por Nome
    pesquisaPeso.sort((a, b) => { return b.nome.localeCompare(a.nome); });
    console.log(pesquisaPeso);

    // Ordenar Crescente por Total
    pesquisaPeso.sort((a, b) => { return a.total - b.total; });

    // Ordenar Decrescente por Total
    pesquisaPeso.sort((a, b) => { return b.total - a.total; });

    // Traduz tipo1 e tipo2 de Fire para Fogo
    let pokemonsTipoFogo = pokemons.filter((d) => { return d.tipo1 == "Fire" || d.tipo2 == "Fire"; });
    console.log(pokemonsTipoFogo);

    pokemons.map((d) => {

        if (d.tipo1 == "Fire")   {
            d.tipo1 = "Fogo";
        } else if (d.tipo2 == "Fire") {
            d.tipo2 = "Fogo";
        }
    });


    // Cria uma cópia profunda dos objetos filtrados para preservar o array original
    let pokemonsTipoAgua = pokemons.filter((d) => { return d.tipo1 == "Water" || d.tipo2 == "Water"; })
        .map((pokemon) => ({ ...pokemon }));
    
    console.log(pokemonsTipoAgua);

}

function criarTabela(container) {

    const containerTabela = document.querySelector(container);

    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    containerTabela.appendChild(table);

    criarCabecalho(thead);
    preencherDadosTabela(tbody);

    table.appendChild(thead);
    table.appendChild(tbody);
}

function criarCabecalho(thead) {

    let cabecalho = Object.keys(pokemons[0]);
    const tr = document.createElement('tr');
    thead.appendChild(tr);

    // Adicionar células de cabeçalho
    cabecalho.forEach((d) => {
        const th = document.createElement("th");
        th.textContent = d;
        tr.appendChild(th);
    });
}

function preencherDadosTabela(tbody) {

    // Adicionar linhas e células de dados
    for (let i = 0; i < pokemons.length; i++) {
       
        const tr = document.createElement('tr');
        tbody.appendChild(tr);

        let celulas = Object.values(pokemons[i]);

        celulas.forEach((d) => {

            let td = document.createElement("td");
            td.textContent = d;
            tr.appendChild(td);

        });
    }
}


window.addEventListener('load', () => {
    carregarDados();
});