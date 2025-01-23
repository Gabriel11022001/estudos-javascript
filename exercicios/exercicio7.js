/**
 * Um motorista deseja colocar no seu tanque X reais de gasolina. Escreva um algoritmo para ler o 
 * preço do litro da gasolina e o valor do pagamento, e exibir quantos litros ele conseguiu colocar no tanque.
 */
const precoLitroCombustivel = 5.76;
const totalPagamento = 100;
const quantidadeLitrosAbastecidos = totalPagamento / precoLitroCombustivel;

console.log(`preço do litro: R$${ precoLitroCombustivel }`);
console.log(`total pagamento: R$${ totalPagamento }`);
console.log(`total de litros abastecidos: ${ quantidadeLitrosAbastecidos } litros`);
