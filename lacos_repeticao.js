// while
let valorIncrementar = 0;

while (valorIncrementar < 100) {
    console.log(valorIncrementar);

    valorIncrementar++;
}

let segundoValorIncrementar = 0;

while (segundoValorIncrementar <= 100) {
    console.log(segundoValorIncrementar);

    segundoValorIncrementar++;
}

segundoValorIncrementar = 1;

while (segundoValorIncrementar <= 100) {
    console.log(segundoValorIncrementar);

    segundoValorIncrementar++;
}

// do-while
valorIncrementar = 0;

do {
    console.log(valorIncrementar);
    
    valorIncrementar++;
} while(valorIncrementar < 100);

// for
for (let contador = 0; contador < 100; contador++) {
    console.log(contador);
}

// percorrer um array
const numeros = [1, 2, 3, 55, 33, 66];

let contadorNumeros = 0;

while (contadorNumeros < numeros.length) {
    console.log(numeros[ contadorNumeros ]);

    contadorNumeros++;
}

contadorNumeros = 0;

do {
    console.log(numeros[ contadorNumeros ]);

    contadorNumeros++;
} while (contadorNumeros < numeros.length);

for (let contador = 0; contador < numeros.length; contador++) {
    console.log(numeros[ contador ]);
}

contadorNumeros = numeros.length - 1;

while (contadorNumeros >= 0) {
    console.log("==================================");
    console.log(numeros[ contadorNumeros ]);

    contadorNumeros--;
}

contadorNumeros = numeros.length - 1;

do {
    console.log(numeros[ contadorNumeros ]);

    contadorNumeros--;
} while(contadorNumeros >= 0);

for (let contador = numeros.length - 1; contador >= 0; contador--) {
    console.log(numeros[ contador ]);
}