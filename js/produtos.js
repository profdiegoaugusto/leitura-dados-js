import { ProdutoService } from "../services/produto-service.js";


const produtoService = new ProdutoService();

async function obterDados() {

    try {

        const produtos = await produtoService.getAll();
        console.table(produtos);
        
    } catch (error) {
        alert(error); 
    }  
    
}


window.addEventListener("load", obterDados);