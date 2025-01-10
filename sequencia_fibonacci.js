// apresentar série fibonacci
const numeros = [1, 2];

for (let contador = 2; contador < 100; contador++) {
    numeros.push(numeros[ contador - 1 ] + numeros[ contador - 2 ]);
}

for (let contador = 0; contador < numeros.length; contador++) {
    console.log(numeros[ contador ]);
}
