const select = document.querySelector("select");
const URL_BASE = "../data/cargos.json" 

async function carregarDados() {

    try {

        const resposta = await fetch(URL_BASE);

        if (!resposta.ok)
            throw new Error("Não foi possível carregar os dados!")

        const cargos = await resposta.json();
        popularSelect(cargos);

    } catch (error) {
        
        alert(error);
        console.error(error);
    }
}

function popularSelect(dados) {

    for (let i = 0; i < dados.length; i++) {

        const option = document.createElement("option");
        option.setAttribute("value", dados[i].id);
        option.innerText = dados[i].titulo;
        select.appendChild(option);
    }
    
}

window.addEventListener("load", () => {

    carregarDados();

});