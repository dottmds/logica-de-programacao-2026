export function exercicio06() {
    console.log("-------EXERCICIO 6-------")
    var minimas = [];
    var maximas = [];

    for (var dia = 0; dia < 30; dia++) {

        var valor1 = Math.floor(Math.random() * 24) + 12;
        var valor2 = Math.floor(Math.random() * 24) + 12;

        if (valor1 < valor2) {
            minimas[dia] = valor1;
            maximas[dia] = valor2;
        } else {
            minimas[dia] = valor2;
            maximas[dia] = valor1;
        }
    }
console.log(pai)
}

exercicio06();