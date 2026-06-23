import leia from 'readline-sync'

const partes = [
    `
  +---+
  |   |
      |
      |
      |
      |
=========`,
    `
  +---+
  |   |
  O   |
      |
      |
      |
=========`,
    `
  +---+
  |   |
  O   |
  |   |
      |
      |
=========`,
    `
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========`,
    `
  +---+
  |   |
  O   |
 /|\\  |
      |
      |
=========`,
    `
  +---+
  |   |
  O   |
 /|\\  |
 /    |
      |
=========`,
    `
  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
=========`,
];

var palavras = [ 'javascript', 'computador', 'programacao', 'algoritimo', 'variavel',
    'funcao', 'terminal', 'internet', 'logica', 'senai', 'teclado'
]

var letrasCertas = [];
var letrasErradas = [];
var tentativas = 6;
var venceu = false;

var palavraSecreta = palavras[Mathfloor(Math.random() + palavras.length)]