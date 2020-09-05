// DESAFIO - validador de cartão de crédito

// Todos os números de cartão de crédito têm uma sequência que pode ser validada através de um algoritmo chamado Algoritmo de Luhn. Para validar qualquer número de cartão de crédito (o padrão de 16 dígitos), siga os seguintes passos:

// 1. Retire o último dígito do número. Ele é o verificador;
// 2. Escreva os números na ordem inversa;
// 3. Multiplique os dígitos das casas ímpares por 2 e subtraia 9 de todos os resultados maiores que 9;
// 4. Some todos os números;
// 5. O dígito verificador (aquele do passo 1) é o número que você precisa somar a todos os outros números somados para fazer a validação;
// 6. O número de cartão de crédito será válido caso o total (do passo 5) seja múltiplo de 10 (ou seja, numero % 10 === 0)

// Números de cartões válidos para teste:

// 5555666677778884
// 5485755481460022
// 5141331902596939
// 5381579886310193
// 5261400319746371

// function cartaoValido(num) {
//   let digito = 0;
//   let casaImpar = 0;
//   let minhaArray = num.toString().split("");

//   for (let i = 0; i < minhaArray.length; i++) {
//     if (i % 2 === 0) {
//       if (minhaArray[i] * 2 >= 10) {
//         casaImpar += minhaArray[i] * 2 - 9;
//       } else {
//         casaImpar += minhaArray[i] * 2;
//       }
//     } else {
//       digito += parseInt(minhaArray[i]);
//     }
//   }
//   return (digito + casaImpar) % 10 === 0;
// }

// console.log(cartaoValido(5261400319746371));

let cartao = [5, 2, 6, 1, 4, 0, 0, 3, 1, 9, 7, 4, 6, 3, 7, 1];

// guardar digito para soma
const digitoVerificador = cartao[cartao.length - 1];
// console.log(digitoVerificador);

//  remove o ultimo elemento
cartao.pop();

// apos remocao do elemento
let reduzCartao = cartao;
// console.log(cartao);

// inverte a ordem do array
let reverteCartao = reduzCartao.reverse().join("");
// console.log(reverteCartao);

//  verificar o indice e impar
let soma = 0;

for (let i = 0; i < reverteCartao.length; i++) {
  let novoValor;

  if ((i + 1) % 2 === 0) {
    novoValor = reverteCartao[i];
  } else {
    novoValor = 2 * reverteCartao[i];

    if (novoValor > 9) {
      novoValor = novoValor - 9;
    }
  }
  // somar todos os numeros
  soma = Number(soma) + Number(novoValor);
}
// console.log("soma todos os numeros ", soma);

//  soma para fazer validacao
const resultado = Number(soma) + Number(digitoVerificador);

//  cartao valido multiplo de 10
const cartaoResultado = resultado % 10 === 0;

console.log(cartaoResultado);
///////////////////////

// DESAFIO - saudar clientes

// Escreva uma função chamada saudarCliente.
// Essa função deve receber um nome, verificar se ele existe na base de clientes e retornar uma saudação com base em quantas vezes a cliente visitou um estabelecimento.
// Consulte o objeto baseClientes abaixo. A saudação deve ser diferente, dependendo do nome da reserva.

// Caso 1 - Cliente desconhecida (o nome não está presente no objeto baseClientes)
// console.log(saudarCliente('Chiquinha')) // --> 'Olá, é a primeira vez por aqui?'

// Caso 2 - Cliente que visitou apenas uma vez (o valor de 'visitas' é 1)
// console.log(saudarCliente('Clotilde')) // --> 'Bem-vinda, Clotilde! Que bom que voltou!'

// Caso 3 - Cliente repetida: (o valor de 'visitas' é maior que 1)
// console.log(saudarCliente('Florinda')) // --> 'Bem-vinda mais uma vez, Florinda!'

// Notas:
// Sua função não deve alterar o objeto baseClientes para atualizar o número de visitas.
// Não codifique os dados exatos da amostra. Esta é uma má ideia:
// if (nomeCliente === 'Maria') {
//   // etc
// }

// const baseClientes = {
//   Clotilde: {
//     visitas: 1,
//   },
//   Florinda: {
//     visitas: 2,
//   },
//   Paty: {
//     visitas: 3,
//   },
// }
