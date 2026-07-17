import leia from 'readline-sync'

// 5) Você está desenvolvendo um software para calcular preços do xerox de uma papelaria.
//    Cada cópia custa R$0,33. Crie um algoritmo que mostre os valores de quanto custa 1
//    cópia até quanto custa 500 cópias.


var copias = 1;

while(copias <= 500) {
    console.log("VALOR " + copias + ": R$" + copias * 0.33);

    copias++
}