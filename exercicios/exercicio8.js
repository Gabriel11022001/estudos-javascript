/**
 * O restaurante a quilo Bem-Bão cobra R$12,00 por cada quilo de refeição. Escreva um algoritmo 
 * que leia o peso do prato montado pelo cliente (em quilos) e imprima o valor a pagar. Assuma que a 
 * balança já desconte o peso do prato. 
 */
const valorQuilo = 12;
const pesoPratoCliente = 2.5;
const valorTotalPagar = valorQuilo * pesoPratoCliente;

console.log('o cliente vai pagar: R$' + valorTotalPagar + ' pelo prato!');