import leia from 'readline-sync';

export function listar(estoque) {

    estoque.forEach((produto) => {

        console.log(produto.nome);
        console.log(produto.preco);
        console.log(produto.quantidade);
    });

}