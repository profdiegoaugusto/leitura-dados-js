export class EstacaoEspacialInternacionalService {

    constructor() {
        // Define a URL base da API
        this.urlBase = "https://api.wheretheiss.at/v1/satellites/25544";
    }

    async getISS() {

        const resposta = await fetch(this.urlBase);

        if (!resposta.ok) {
            throw new Error('Não foi possível buscar a Estação Espacial Internacional.');
        }

        return resposta.json();
    }


}