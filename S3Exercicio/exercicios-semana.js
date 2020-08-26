const input = require("readline-sync");

// 1) Calcule a potência de 2 elevado a um número específico. Deve usar um loop (não usar `Math.pow()`).
// Exemplo:
// potenciaDeDois(10) // 1024

function potenciaDeDois() {
  let numero = input.question("Qual número será elevado? ");
  let potencia = input.question("Elevado a qual potência? ");

  let resultado = 1;

  for (let i = 0; i < potencia; i++) {
    resultado *= numero;
  }

  console.log("O resultado é: " + resultado);
}

potenciaDeDois();

// 2) Crie uma função que receba três números e determine se um número é maior que outro.
// Exemplo:
// retornaNumMaior(10, 20, 30) // 30

function retornaNumMaior() {
  const meuArray = [0, 10, 13, 2, 30, 28, 1];
  let maior = 0;

  for (let i = 0; i < meuArray.length; i++) {
    if (meuArray[i] > maior) {
      maior = meuArray[i];
    }
  }
  console.log("O maior número é: " + maior);
}

retornaNumMaior();

// ***************

// DESAFIOS!

// Crie uma função que determina se um número é primo e retorne true ou false conforme o caso. Em matemática, um número primo é um número natural maior que 1 que é divisível somente por ele mesmo e 1. Utilize o operador módulo (`%`) para determinar se um número é divisível por outro.

function numPrimo() {
  let number = input.question("Digite um número: ");

  let primo = `O número ${number} é primo`;
  let noPrimo = `O número ${number} não é primo`;
  let result = noPrimo;

  for (i = 2; i < number; i++) {
    result = primo;

    if (number % i == 0) {
      result = noPrimo;
      break;
    }
  }

  if (number == 2) {
    result = primo;
  }

  console.log(result);
}

numPrimo();

// Crie uma função que conte o número de vogais em uma `string` e retorne o número de vogais.
// Exemplo:
// function contaVogais("carro") // 2

// Use estruturas de controle para inverter uma array de inteiros. A função deverá receber uma
// array de números e retornar uma array com a ordem dos elementos invertida. Não é válido utilizar `arr.reverse()`.
// Exemplo:
// function inverteArray([1, 2, 3, 4]) // [4, 3, 2, 1]
