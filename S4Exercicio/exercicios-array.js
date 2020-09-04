// Exercícios práticos com for e arrays!

// 1) Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
// Exemplo: recebendo ["banana", "gatinho", "brócolis"] deve imprimir no console:
// índice 0, elemento "banana"
// índice 1, elemento "gatinho"
// índice 2, elemento "brócolis"

const nomes = ["banana", "gatinho", "brócolis"];

function imprimeIndiceElemento(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`índice: ${i}, elemento: ${arr[i]}`);
  }
}

imprimeIndiceElemento(nomes);

// 2) Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.
// Exemplo: recebendo [10,11,12] deve retornar 33

function recebeArray(arr) {
  let soma = 0;

  for (let i = 0; i < arr.length; i++) {
    soma += arr[i];
  }

  return soma;
}

console.log(recebeArray([10, 11, 12]));

// 3) Crie uma função que receba uma array de números inteiros e retorne outra
// array somente com os elementos maiores que 5.
// Exemplo, recebendo [88,55,0,2,85,81,24,12] deve retornar [ 88, 55, 85, 81, 24, 12 ]

function maiorQueCinco(arr) {
  const numerosMaiores = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      numerosMaiores.push(arr[i]);
    }
  }
  return numerosMaiores;
}

console.log(maiorQueCinco([88, 55, 0, 2, 85, 81, 24, 12]));

// 4) Modifique a função anterior para que receba, além da array, o número para
// comparação (não deixar mais fixo como número 5).
// Exemplo, recebendo ([88,55,0,2,85,81,24,12], 20) deve retornar [ 88, 55, 85, 81, 24 ]

function maiorQueNumeros(arr, num) {
  const numerosMaiores = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      numerosMaiores.push(arr[i]);
    }
  }
  return numerosMaiores;
}

console.log(maiorQueNumeros([88, 55, 0, 2, 85, 81, 24, 12], 20));

// 5) Crie uma função que receba uma array de números inteiros e retorne o maior número encontrado.
// Exemplo: recebendo [56, 12, 168, 66] deve retornar 168
// EXTRA: Pesquisar uma maneira iniciar com o menor número possível (dica: não é zero)

function numInteiro(arr) {
  return Math.max.apply(Math, arr);
}

console.log(numInteiro([56, 12, 168, 66]));

// test
// Array.max = function (array) {
//   return Math.max.apply(Math, array);
// };

// console.log(Array.max([56, 12, 168, 66]))

//test1
// const arr = [56, 12, 168, 66];

// let max = arr.reduce(function (a, b) {
//   return Math.max(a, b);
// });

// console.log(max);

//test2
// function numeroMaiorInteiro(arr) {
//   const numeroMaior = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > numeroMaior) {
//       numeroMaior = arr[i];
//     }
//   }
// }

// console.log(numeroMaiorInteiro([56, 12, 168, 66]));

// 6) Crie uma função que receba uma array de números inteiros e retorne o
// menor valor e o maior valor da array, no seguinte formato:
// "o menor número é X e o maior número é Y".
// Exemplo, recebendo [5, 37, 18, 59, 12, -5] a função deve retornar "o maior
// número é 59 e o menor número é -5"

// Funcao para retornar o menor valor de um array
Array.min = function (array) {
  return Math.min.apply(Math, array);
};

// Funcao para retornar o maior valor de um array
Array.max = function (array) {
  return Math.max.apply(Math, array);
};

let arr = [5, 37, 18, 59, 12, -5];
console.log(
  `o menor número é ${Array.min(arr)} e o maior número é ${Array.max(arr)}`
);
