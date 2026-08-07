import leia from 'readline-sync'
import { DIFICULDADES } from './config/config.js';
import { jogo } from './objetos/jogo.js';

function mostrarMenu() {
    console.log("==============================");
    console.log("       JOGO DA COBRINHA       ");
    console.log("==============================");

    console.log("1 - FÁCIL");
    console.log("2 - MÉDIO");
    console.log("3 - DIFÍCIL");

    var opcao = leia.questionInt("Escolha uma opção: ");
    var dificuldade = DIFICULDADES[opcao];
    
    if(dificuldade === undefined) {
        console.log("Opção inválida");
        return;
    }

    jogo.iniciar(dificuldade)
}

mostrarMenu();