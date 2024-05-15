
const URL_BASE = "../data/cargos.json" 

async function carregarDados() {

    try {

        const resposta = await fetch(URL_BASE);

        if (!resposta.ok)
            throw new Error("Não foi possível carregar os dados!")

        const cargos = await resposta.json();
        console.table(cargos);

    } catch (error) {
        
        alert(error);
        console.error(error);
    }
}

window.addEventListener("load", carregarDados);