const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function lerPrimeiroValor() {

    rl.question('', function (primeiroValorDigitado) {
        const primeiroValor = parseInt(primeiroValorDigitado);

        lerSegundoValor(primeiroValor);
    });

}

function lerSegundoValor(primeiroValorInformado) {

    rl.question('', function (segundoValorDigitado) {
        const segundoValor = parseInt(segundoValorDigitado);

        rl.close();
        
        calcularProduto(primeiroValorInformado, segundoValor);
    });

}

function calcularProduto(primeiroValor, segundoValor) {
    const prod = primeiroValor * segundoValor;

    console.log('PROD = ' + prod);
}

lerPrimeiroValor();