/**
 * Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um algoritmo que 
 * calcule seu peso ideal, utilizando as seguintes fórmulas: 
    ● para homens: (72.7 * h) – 58; 
    ● para mulheres: (62.1 * h) – 44.7.
 */

const altura = 1.83;
const genero = 'masculino';

const calcularPesoIdeal = (altura, genero) => {

    if (genero === 'masculino') {

        return (72.7 * altura) - 58;
    }

    return (62.1 * altura) - 44.7;
}

console.log(calcularPesoIdeal(altura, genero));