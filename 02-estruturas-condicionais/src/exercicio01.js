import leia from 'readline-sync';

var senhaUsuario = leia.question("Digite a sua senha: ");
var senhaPadrao = "1234"

if(senhaUsuario === senhaPadrao){
    console.log("acesso permitido")
}else {
    console.log("acesso negado")
}