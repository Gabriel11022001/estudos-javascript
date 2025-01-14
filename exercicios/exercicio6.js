// calcular fatorial de um número
const numero = 5;
let fatorial = 1;
const numeros = [];
let fatorialApresentar = "";

for (let contador = numero; contador > 0; contador--) {
    numeros.push(contador);
}

// console.log(numeros);

function calcularFatorial() {

    for (let contador = 0; contador < numeros.length; contador++) {

        if (contador < (numeros.length - 1)) {
            fatorialApresentar = fatorialApresentar + (numeros[ contador ] + " X ");
        } else {
            fatorialApresentar = fatorialApresentar + (numeros[ contador ]);
        }

        fatorial *= numeros[ contador ];
    }

    // console.log(fatorialApresentar);
}

calcularFatorial();

console.log("!" + numero + " = " + fatorialApresentar + " = " + fatorial);