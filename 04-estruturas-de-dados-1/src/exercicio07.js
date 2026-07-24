export function exercicio07() {

var pai = [];
var mae = [];
var filho = [];

for (var i = 0; i < 50; i++) {
    pai[i] = (Math.floor(Math.random() * 100));
    mae[i] = (Math.floor(Math.random() * 100));
}

for (var i = 0; i < 50; i++) {
    if (pai[i] % 2 == 0) {
        filho[i] = pai[i]
    } else {
        filho[i] = mae[i]
    }

}

}

exercicio07();