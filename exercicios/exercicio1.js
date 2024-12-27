/**
 * 1) Desenvolver um algoritmo que efetue a soma de todos os números ímpares que são múltiplos de 
 * três e que se encontram no conjunto dos números de 1 até 500. 
 */
let soma = 0;

for (let contador = 1; contador <= 500; contador++) {

    if ((contador % 2 != 0) && (contador % 3 == 0)) {
        soma += contador
    }

}

console.log('Soma: ' + soma)