import { estoque } from "./estoq.js";

export function listarProdutos() {
    console.log("\n------------------- ESTOQUE ATUAL -------------------");
    console.log("ID" + " | " + "NOME" + " | " + "QTD" + " | " + "PREÇO (R$)");
    console.log("-----------------------------------------------------");

    if (estoque.length === 0) {
        console.log("Nenhum produto cadastrado no momento.");
        return;
    }

    for (var i = 0; i < estoque.length; i++) {
        var produto = estoque[i];
        console.log(produto.id + " | " + produto.nome + " | " + produto.quantidade + " | R$ " + produto.preco);
    }
    
    console.log("-----------------------------------------------------");
}