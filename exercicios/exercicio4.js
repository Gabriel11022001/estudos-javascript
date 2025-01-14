// Escrever um algoritmo que gera e escreve os números ímpares entre 100 e 200. 
const numerosImpares = [];

for (let contador = 100; contador <= 200; contador++) {

    if (contador % 2 != 0) {
        numerosImpares.push(contador);
    }

}

console.log("Números impares entre 100 e 200");

for (let contador = 0; contador < numerosImpares.length; contador++) {
    console.log(numerosImpares[ contador ]);
}