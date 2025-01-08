const primeiroValor = 22;
const segundoValor = 11;

// soma
const soma = primeiroValor + segundoValor;
console.log(soma);

// subtração
const subtracao = primeiroValor - segundoValor;
console.log(subtracao);

// multiplicação
const mult = primeiroValor * segundoValor;
console.log(mult);

// divisão
const div = primeiroValor / segundoValor;
console.log(div);

// também posso realizar operações matemáticas entre float e inteiros
const inteiro = 11;
const float = 22.98;

console.log(inteiro + float);
console.log(inteiro - float);
console.log(inteiro * float);
console.log(inteiro / float);

console.log('3' * 2); // isso funciona
console.log('3' / 2); // isso também funciona
console.log('10' - 11); // isso também funciona
console.log('1' + 1); // aqui será concatenado

// converter para um número antes de realizar operação
let primeiroValorSomar = '11';
let segundoValorSomar = '22';

// parseFloat -> retorna o valor convertido para floar
primeiroValorSomar = parseFloat(primeiroValorSomar);
// parseInt -> retorna o valor convertido para um inteiro
segundoValorSomar = parseInt(segundoValorSomar);

console.log(primeiroValorSomar + segundoValorSomar);

// resto da divisão
console.log(10 % 2);

// incremento de valores
let numero = 12;

numero = numero + 12;
console.log(numero);

numero += 12;
console.log(numero);

numero++;
console.log(numero);

// decremento
numero =  numero - 10;
console.log(numero);

numero -= 10;
console.log(numero);

numero--;

// multiplicação
numero = numero * 2;
console.log(numero);

numero *= 2;
console.log(numero);

// divisão
numero = numero / 2;
console.log(numero);

numero /= 2;

console.log(numero);