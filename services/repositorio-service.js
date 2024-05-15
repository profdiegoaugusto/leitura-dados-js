export class RepositorioService {

    constructor() {

        
        // Define a URL base da Fake Store API
        this.urlBase = "https://api.github.com";
    }

    async getAll(idUsuario) {

        console.log(`${this.urlBase}/users/${idUsuario}/repos`);

        const resposta = await fetch(`${this.urlBase}/users/${idUsuario}/repos`);

        if (!resposta.ok) {
            throw new Error('Não foi possível buscar os repositórios deste usuário');
        }

        return resposta.json();
    }


}