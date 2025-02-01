function somar(primeiroValor, segundoValor) {

    return primeiroValor + segundoValor;
}

const somar1 = somar;

console.log(somar(11, 22));
console.log(somar1(22, 11));

function subtrair(primeiroValor, segundoValor) {

    return primeiroValor - segundoValor;
}

function realizarOperacao(primeiroValor, segundoValor, funcao) {

    return funcao(primeiroValor, segundoValor);
}

console.log(realizarOperacao(11, 22, somar));
console.log(realizarOperacao(11, 10, somar));
console.log(realizarOperacao(10, 2, subtrair));

// forma mais utilizada com funções anônimas
console.log(realizarOperacao(11, 22, function (primeiroValor, segundoValor) {

    return primeiroValor / segundoValor;
}));

console.log(realizarOperacao(10, 10, (primeiroValor, segundoValor) => {

    return primeiroValor + segundoValor;
}));