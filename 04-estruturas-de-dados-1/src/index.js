import leia from 'readline-sync';
import { exercicio01 } from './exercicio01.js';
import { exercicio02 } from './exercicio02.js';
import { exercicio03 } from './exercicio03.js';
import { exercicio04 } from './exercicio04.js';
import { exercicio05 } from './exercicio05.js';
import { exercicio06 } from './exercicio06.js';
import { exercicio07 } from './exercicio07.js';

console.log("-------MENU DE EXERCÍCIOS-------");

var opcao = leia.keyInSelect([
    "EXERCÍCIO 01",
    "EXERCÍCIO 02",
    "EXERCÍCIO 03",
    "EXERCÍCIO 04",
    "EXERCÍCIO 05",
    "EXERCÍCIO 06",
    "EXERCÍCIO 07",

]);

switch (opcao) {
    case 0:
        exercicio01();
        break;
    case 1:
        exercicio02();
        break;
    case 2:
        exercicio03();
        break;
    case 3:
        exercicio04();
        break;
    case 4:
        exercicio05();
        break;
    case 5:
        exercicio06();
        break;
    case 6:
        exercicio07();
        break;
}