const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const lerPrimeiroValor = () => {

    rl.question('', (primeiroValorDigitado) => {
        const primeiroValor = parseInt(primeiroValorDigitado);

        lerSegundoValor(primeiroValor);
    });

}

const lerSegundoValor = (primeiroValorInformado) => {

    rl.question('', (segundoValorDigitado) => {
        const segundoValor = parseInt(segundoValorDigitado);

        rl.close();

        realizarSoma(primeiroValorInformado, segundoValor);
    });

}

const realizarSoma = (primeiroValor, segundoValor) => {
    const soma = primeiroValor + segundoValor;

    console.log(`SOMA = ${ soma }`);
}

lerPrimeiroValor();