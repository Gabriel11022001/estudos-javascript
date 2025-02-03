const somar = (primeiroValor, segundoValor) => {

    return primeiroValor + segundoValor;
}

const subtrair = (primeiroValor, segundoValor) => {

    return primeiroValor - segundoValor;
}

const multiplicar = (primeiroValor, segundoValor) => {

    return primeiroValor * segundoValor;
}

const dividir = (primeiroValor, segundoValor) => {

    if (primeiroValor == 0 || segundoValor == 0) {

        throw Error('Erro de divisão por 0!');
    }

    return primeiroValor / segundoValor;
}

try {
    const primeiraSoma = somar(1, 22);
    const primeiraSubtracao = subtrair(2, 1);
    const primeiraMutiplicacao = multiplicar(22, 1);
    const primeiraDivisao = dividir(11, 2);

    console.log('Soma: ' + primeiraSoma);
    console.log('Subtração: ' + primeiraSubtracao);
    console.log('Multiplicação: ' + primeiraMutiplicacao);
    console.log('Divisão: ' + primeiraDivisao);

    // const divisaoVaiDarErro = dividir(11, 0);

    // quando a arrow function possui um unico parâmetro
    const dobrarValor = valorDobrar => valorDobrar * 2;

    console.log(dobrarValor(2));
    console.log(dobrarValor(11));
    console.log(dobrarValor(22));

    // também posso escrever dessa forma
    const triplicarValor = (valorTriplicar) =>  valorTriplicar * 3;

    console.log(triplicarValor(32));
} catch (e) {
    console.log(e);
}