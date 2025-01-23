/**
 *  IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar 
 * uma indicação sobre a condição de peso de uma pessoa adulta. A fórmula é IMC = peso / ( altura )2  
 * Elabore um algoritmo que leia o peso e a altura de um adulto e mostre sua condição de acordo 
 * com a tabela abaixo. 
 * IMC em adultos Condição 
 * Abaixo de 18,5 Abaixo do peso 
 * Entre 18,5 e 25 Peso normal 
 * Entre 25 e 30 Acima do peso 
 * Acima de 30 obeso 
 */
const peso = 98.98;
const altura = 1.83;

const calcularImc = (peso, altura) => {

    return peso / (altura * altura);
}

console.log(`peso: ${ peso }kg`);
console.log(`altura: ${ altura } metros de altura`);
console.log('imc => ' + calcularImc(peso, altura));