import leia from 'readline-sync';
import { estoque } from "./estoq.js";
import { listarProdutos } from './listar.js';

export function deletarProduto() {
    listarProdutos();

    if (estoque.length === 0) return;

    console.log("\n--- REMOVER PRODUTO ---");

    var idBusca = leia.questionInt("Digite o ID do produto que deseja excluir: ");

    for (var i = 0; i < estoque.length; i++) {

        if (estoque[i].id === idBusca) {
            estoque.splice(i, 1);

            console.log("\n>> Produto removido com sucesso!");
            return;
        }
    }

    console.log("\n>> Nenhum produto foi encontrado com esse ID.");
}