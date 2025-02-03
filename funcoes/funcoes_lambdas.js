const nomes = ['Gabriel', 'Maria', 'Eduarda', 'Fernanda', 'Pedro', 'Edmildes', 'Eliana', 'Ana Clara', 'Allan', 'Otávio'];

const obterNomesIniciamComVogais = function () {
    const nomesRetornar = [];

    nomes.forEach((nomeAtual) => {
        const primeiroCaracter = nomeAtual[ 0 ].toLowerCase();

        if (primeiroCaracter === 'a' || primeiroCaracter === 'e' || primeiroCaracter === 'i' || primeiroCaracter === 'o' || primeiroCaracter === 'u') {
            nomesRetornar.push(nomeAtual);
        }

    });

    return nomesRetornar.sort();
}

console.log(obterNomesIniciamComVogais());

const realizarOperacao = (primeiroValor, segundoValor, operacao) => {

    return operacao(primeiroValor, segundoValor);
}

const soma = realizarOperacao(11, 22, (primeiroValor, segundoValor) => {

    return primeiroValor + segundoValor;
});

console.log(soma);

const dividir = realizarOperacao(11, 0, function (primeiroValor, segundoValor) {

    if (primeiroValor == 0 || segundoValor == 0) {

        return 'Valores para dividir inválidos!';
    }

    return primeiroValor / segundoValor;
});

console.log(dividir);

const precos = [1.98, 220, 8.98, 22.98, 50];

const precosMenoresCinquenta = precos.filter((precoAtual) => {

    return precoAtual < 50;
});

const precosMaioresCinquenta = precos.filter(precoAtual => precoAtual > 50);

console.log(precosMenoresCinquenta);
console.log(precosMaioresCinquenta);