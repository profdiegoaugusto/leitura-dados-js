import { RepositorioService } from "../services/repositorio-service.js";


const repositorioService = new RepositorioService();

const usuarioGithubInput = document.querySelector("#usuario-github");

const listaRepositorios = document.querySelector("#lista-repositorios");
const totalRepositorios = document.querySelector("#qtde-repositorios");
const buscarRepositoriosBtn = document.querySelector("#buscarRepositorios");

async function buscarRepositorios() {

    try {

        const repositorios = await repositorioService.getAll(usuarioGithubInput.value);

        console.log(repositorios);

        totalRepositorios.textContent = repositorios.length + " repositórios encontrados.";
        atualizarListaRepositorios(repositorios);

    } catch (error) {
        alert(error); 
    }  
    
}


function atualizarListaRepositorios(repositorios) {

    for (let i = 0; i < repositorios.length; i++) {

        const li = document.createElement("li");
        li.innerText = repositorios[i].name;
        listaRepositorios.appendChild(li);
    }
}


buscarRepositoriosBtn.addEventListener("click", buscarRepositorios);