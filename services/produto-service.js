export class ProdutoService {

    constructor() {
        // Define a URL base da Fake Store API
        this.urlBase = "https://fakestoreapi.com/products/";
    }

    async getAll() {

        const resposta = await fetch(this.urlBase);

        if (!resposta.ok) {
            throw new Error('Não foi possível buscar todos os contatos');
        }

        return resposta.json();
    }


}