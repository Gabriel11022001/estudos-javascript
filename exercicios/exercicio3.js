/**
 * 3) Desenvolver um algoritmo que leia um número não determinado de valores e calcule e escreva a 
 * média aritmética dos valores lidos, a quantidade de valores positivos, a quantidade de valores 
 * negativos e o percentual de valores negativos e positivos. 
 */
const numeros = [];

// gerar 100 números aleatórios
for (let contador = 0; contador < 100; contador++) {
    numeros.push(Math.floor((Math.random() + 1) * (1000 / 20)));
}

const calcularMediaAritmetica = (numeros) => {
    let soma = 0;

    for (let contador = 0; contador < numeros.length; contador++) {
        soma += numeros[ contador ];
    }

    return soma / numeros.length; 
}

const obterNumeroValoresPositivos = (numeros) => {
    let numerosPositivos = 0;

    for (let contador = 0; contador < numeros.length; contador++) {

        if (numeros[ contador ] >= 0) {
            numerosPositivos++;
        }

    }

    return numerosPositivos;
}

const obterNumeroValoresNegativos = (numeros) => {
    let numerosNegativos = 0;

    for (let contador = 0; contador < numeros.length; contador++) {

        if (numeros[ contador ] < 0) {
            numerosNegativos++;
        }

    }

    return numerosNegativos;
}

const obterPercentualNumerosPositivos = (numeros) => {
    const numerosPositivos = obterNumeroValoresPositivos(numeros);

    return (numerosPositivos / 100) * numeros.length;
}

const obterPercentualNumerosNegativos = (numeros) => {

    return (obterNumeroValoresNegativos(numeros) / 100) * numeros.length;
}

console.log(numeros);

const mediaAritmetica = calcularMediaAritmetica(numeros);
const numerosPositivos = obterNumeroValoresPositivos(numeros);
const numerosNegativos = obterNumeroValoresNegativos(numeros);
const percentualNumerosPositivos = obterPercentualNumerosPositivos(numeros);
const percentualNumerosNegativos = obterPercentualNumerosNegativos(numeros);

console.log("Percentual de números positivos: " + percentualNumerosPositivos + "%");
console.log("Percentual de números negativos: " + percentualNumerosNegativos + "%");
console.log("Quantidade de números positivos: " + numerosPositivos);
console.log("Quantidade de números negativos: " + numerosNegativos);
console.log("Média aritmética: " + mediaAritmetica);