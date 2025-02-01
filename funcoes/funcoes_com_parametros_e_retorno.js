function calcularIdade(anoNascimento) {
    const dataAtual = new Date();

    return dataAtual.getFullYear() - anoNascimento;
}

console.log(calcularIdade(2001));

function somar(valores) {
    let soma = 0;

    for (let contador = 0; contador < valores.length; contador++) {
        soma += valores[ contador ];
    }

    return soma;
}

console.log(somar([1, 2, 3, 4]));

function somar2(...valoresSomar) {
    let soma = 0;

    soma = valoresSomar.reduce((valorAnterior, valorAtual) => {

        return valorAnterior + valorAtual;
    });

    return soma;
}

console.log(somar2(1, 2, 3, 4, 5, 6));

const primeiraSoma = somar2(1, 22, 43, 9.87);
console.log(primeiraSoma);

function somar3(...valores) {
    let soma = 0;

    for (let contador = 0; contador < valores.length; contador++) {

        if (isNaN(parseFloat(valores[ contador ]))) {
            continue;
        }

        console.log('vai somar: ' + valores[ contador ]);
        soma += parseFloat(valores[ contador ]);
    }

    return soma;
}

const terceiraSoma = somar3(1, 2, 2, '', false);
console.log(terceiraSoma);

/**
 * em javascript, mesmo que vc não defina os parâmetros de uma função,
 * o proprio javascript cria um argumento invisivel que se chama arguments
 */
function testeApresentarValores() {
    const argumentos = arguments;

    for (let contador = 0; contador < argumentos.length; contador++) {
        console.log(argumentos[ contador ]);
    }

}

testeApresentarValores('Gabriel', 'Eduarda', 11, 22, 33, false, true, { nome: "Pedro" }, { nome: "Maria", idade: 22 });

// funções com valores padrão
function somar4(primeiroValor = 1, segundoValor = 2, terceiroValor = 3) {

    return primeiroValor + segundoValor + terceiroValor;
}

console.log(somar4(2, 3, 4));
console.log(somar4());

function somar(primeiroValor, segundoValor) {

    return primeiroValor + segundoValor;
}

function multiplicar(primeiroValor, segundoValor) {

    return primeiroValor * segundoValor;
}

function calcular(primeiroValor, segundoValor, operacao) {

    return operacao(primeiroValor, segundoValor);
}

console.log(calcular(10, 10, somar));
console.log(calcular(22, 43, multiplicar));

const resto = calcular(20, 10, function (primeiroValor, segundoValor) {

    return primeiroValor % segundoValor;
});

console.log(resto);

console.log(calcular(11, 22, (n1, n2) => {

    return n1 + n2;
}));