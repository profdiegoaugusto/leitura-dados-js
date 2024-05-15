import { EstacaoEspacialInternacionalService } from "../services/estacao-espacial-internacional-service.js";

const issService = new EstacaoEspacialInternacionalService();

const DELAY_MS = 1000;

 function buscarDadosISS() {

    setInterval(async () => {

        const dados = await issService.getISS();
        console.log(dados);

    }, DELAY_MS)
    
}


window.addEventListener("load", () => {

    buscarDadosISS();

});