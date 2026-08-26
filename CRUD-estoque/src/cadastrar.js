import leia from 'readline-sync';
import { estoque } from './estoq.js';

export function cadastrar(estoque) {
    var nomeDoProduto = leia.question("Informe o nome do produto: ");
    var precoDoProduto = leia.questionFloat("Informe o preco do produto: ");
    var quantidadeDoProduto = leia.questionInt("Informe a quantidade do produto: ");

    var produto = {
        id: estoque.length + 1,
        nome: nomeDoProduto,
        preco: precoDoProduto,
        quantidade: quantidadeDoProduto
    };

    estoque.push(produto);
}