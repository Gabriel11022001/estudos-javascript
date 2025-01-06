const idade = 18;

if (idade >= 18) {
    console.log("Maior de idade!");
} else {
    console.log("Menor de idade!");
}

const primeiroValor = 22;
const segundoValor = 11;
let maiorValor = 0;

if (primeiroValor > segundoValor) {
    maiorValor = primeiroValor;
} else if (primeiroValor < segundoValor) {
    maiorValor = segundoValor;
} else {
    // ambos os valores são iguais
    console.log(`${ primeiroValor } e ${ segundoValor } são iguais!`);
}

if (maiorValor != 0) {
    console.log("Maior valor: " + maiorValor);
}

const numero = 1;
const numeroStrig = "1";

/**
 * o operador de comparação == compara somente o valor
 */
if (numero == numeroStrig) {
    console.log(numero + " e " + numeroStrig + " são iguais!");
}

/**
 * o operador === compara o valor e o tipo
 * então "1" string não é igual a 1 number
 */
if (numero === numeroStrig) {
    console.log(numero + " e " + numeroStrig + " são iguais!");
} else {
    console.log(numero + " e " + numeroStrig + " não são iguais!");
}