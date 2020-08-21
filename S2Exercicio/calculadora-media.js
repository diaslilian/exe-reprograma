const input = require("readline-sync");

const nomeAluno = input.question("Qual é o seu nome? ");

const nota1 = input.question("Digite nota 1: ");
const nota2 = input.question("Digite nota 2: ");
const nota3 = input.question("Digite nota 3: ");
const nota4 = input.question("Digite nota 4: ");
const nota5 = input.question("Digite nota 5: ");
const nota6 = input.question("Digite nota 6: ");

const notaTotal =
  parseFloat(nota1) +
  parseFloat(nota2) +
  parseFloat(nota3) +
  parseFloat(nota4) +
  parseFloat(nota5) +
  parseFloat(nota6);

const media = notaTotal / 6;

console.log(`**** ${nomeAluno}, sua média foi: ${media.toFixed(1)} ****`);

if (media >= 7) {
  console.log("Parabéns, você foi aprovado :D");
} else if (media < 5) {
  console.log("Desculpe, você está reprovado :(");
} else {
  console.log("Você está de recuperação. Estude mais um pouco");
}
