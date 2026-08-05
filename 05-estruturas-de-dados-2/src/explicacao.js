import leia from 'readline-sync';

//var user = {
//  nome: "Douglas",
//  email: "mirozitodot@gmail.com",
//  senha: "jairmessiasbolsonaro1234567676767",
//  hello: () => console.log("HELLOWWW")
//}

//console.log(user);

//console.log(user.nome);

//user.hello();

// pra mudar algo especifico:  nome do objeto, propriedade, ponto(.), atribui(=) e escreva
//user.nome = "Douglete"

var usuarios = [];

for (var i = 0; i < 3; i++) {
  console.log("======= usuario " + i + "=======")
  var nome = leia.question("DIGITE SEU NOME: ");
  var idade = leia.questionInt("DIGITE SUA IDADE: ");
  var email = leia.question("DIGITE SEU EMAIL: ");

  usuarios.push({
    nome,
    idade,
    email
  });
}

usuarios.forEach(usuario => {
  mostrarUsuario(usuario)
})

function mostrarUsuario(user) {
  var { nome, email, idade } = user;
  console.log(`Olá ${user.nome}, você tem ${user.idade} anos, seu email é ${email}`)
}
