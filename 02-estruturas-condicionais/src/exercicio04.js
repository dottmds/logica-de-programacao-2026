import leia from 'readline-sync'

var mc = leia.question("quantas macas vc comprou?: ")

var soma1 = mc * 0.30
var soma2 = mc * 0.25

if(mc < "12") {
    console.log("sua maca vai custar R$" + soma1.toFixed(2))
} else {
    console.log("sua maca vai custar R$" + soma2.toFixed(2))
}