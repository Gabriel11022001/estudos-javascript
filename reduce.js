const precos = [1.98, 2.98, 8.998, 2.98, 1.88];

let soma = 0;

for (let contador = 0; contador < precos.length; contador++) {
    soma += precos[ contador ];
}

console.log('Soma: ' + soma);

soma = 0;

precos.forEach((num) => {
    soma += num;
});

console.log('Soma com foreach => ' + soma);

// o reduce reduz o array a um unico valor
// exemplo:
soma = precos.reduce((valorAnterior, valorAtual) => {

    return valorAnterior + valorAtual;
});

console.log('Soma com reduce: ' + soma);

const idades = [12, 33, 22, 11, 66, 43];

const maiorIdade = idades.reduce((idadeAnterior, idadeAtual) => {

    if (idadeAtual >= idadeAnterior) {

        return idadeAtual;
    }

    return idadeAnterior;
});

console.log(maiorIdade);

const menorIdade = idades.reduce((idadeAnterior, idade) => {

    if (idade < idadeAnterior) {

        return idade;
    }

    return idadeAnterior;
});

console.log(menorIdade);

let maiorIdade2 = 0;

for (let contador = 0; contador < idades.length; contador++) {
    const idadeAtual = idades[ contador ];

    for (let contadorInterno = contador + 1; contadorInterno < idades.length; contadorInterno++) {

        if (idadeAtual >= idades[ contadorInterno ]) {
            maiorIdade2 = idadeAtual;
        }

    }

}

console.log(maiorIdade2);

maiorIdade2 = 0;
let menorIdade2 = 99999999;

for (let contador = 0; contador < idades.length; contador++) {

    if (idades[ contador ] >= maiorIdade) {
        maiorIdade2 = idades[ contador ];
    }

    if (idades[ contador ] <= menorIdade) {
        menorIdade2 = idades[ contador ];
    }

}

console.log('maior idade: ' + maiorIdade2);
console.log('menor idade: ' + menorIdade2);