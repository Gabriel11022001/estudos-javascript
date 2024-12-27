const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const n = 3.14159;

const lerRaio = () => {

    rl.question('', function (raioDigitadoTerminal) {
        const raio = parseFloat(raioDigitadoTerminal);

        rl.close();

        calcularArea(raio);
    });

}

const calcularArea = (raioInformado) => {
    const area = n * (raioInformado * raioInformado);

    console.log('A=' + area.toFixed(4));
}

lerRaio();