import leia from 'readline-sync';
import { estoque } from "./estoq.js";
import { listarProdutos } from './listar.js';

export function atualizarProduto() {
    listarProdutos();

    if (estoque.length === 0) return;

    console.log("\n--- ATUALIZAR PRODUTO ---");

    var idBusca = leia.questionInt("Digite o ID do produto que deseja editar: ");
    var produtoEncontrado = false;

    for (var i = 0; i < estoque.length; i++) {

        if (estoque[i].id === idBusca) {
            produtoEncontrado = true;

            console.log(`\nEditando: ${estoque[i].nome}`);

            var novoNome = leia.question("Mude ou deixe o nome do produto: ")
            var novaQtd = leia.questionInt("Nova Quantidade: ");
            var novoPreco = leia.questionFloat("Novo Preco (R$): ");

            estoque[i].nome = novoNome;
            estoque[i].quantidade = novaQtd;
            estoque[i].preco = novoPreco;

            console.log("\n>> Produto atualizado com sucesso!");
            break;
        }
    }

    if (!produtoEncontrado) {
        console.log("\n>> Produto nao encontrado!");
    }
}