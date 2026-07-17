import leia from 'readline-sync'

// 9) Faça um algoritmo que leia vários números e informe quantos números entre 100 e 200
//    foram digitados (o 100 e o 200 não contam), para as leituras quando o valor 0 (zero) for lido

var numero;
var contador = 0;

do {
    numero = leia.questionInt("INFORME UM NUMERO: ");
    if (numero > 100 && numero < 200) {
        contador++
    }

} while(numero !== 0);

console.log("FORASM DIGITADOS " + contador + " NUMEROS ENTRE 100 E 200!!!");

