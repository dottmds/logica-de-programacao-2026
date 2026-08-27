import { estoque } from "./estoq.js";

export function listarProdutos() {
    console.log("\n------------------- ESTOQUE ATUAL -------------------");
    console.log("ID".padEnd(8) + "| " + "NOME".padEnd(8) + "| " + "QTD".padEnd(8) + "| " + "PREÇO (R$)".padEnd(8));
    console.log("-----------------------------------------------------");

    if (estoque.length === 0) {
        console.log("Nenhum produto cadastrado no momento.");
        return;
    }

    for (var i = 0; i < estoque.length; i++) {
        var produto = estoque[i];
        console.log(String(produto.id).padEnd(8) + "| " + produto.nome.padEnd(8) + "| " + String(produto.quantidade).padEnd(8) + "| R$ " + String(produto.preco).padEnd(8));
    }
    
    console.log("-----------------------------------------------------");
}