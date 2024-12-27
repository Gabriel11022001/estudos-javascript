const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const lerPrimeiraNotaAluno = () => {

    rl.question('', (primeiraNotaDigitada) => {
        const primeiraNotaAluno = parseFloat(primeiraNotaDigitada);

        lerSegundaNotaAluno(primeiraNotaAluno);
    });

}

const lerSegundaNotaAluno = (primeiraNotaAluno) => {

    rl.question('', (segundaNotaDigitada) => {
        const segundaNotaAluno = parseFloat(segundaNotaDigitada);

        rl.close();

        calcularMediaNotasAluno(primeiraNotaAluno, segundaNotaAluno);
    });

}

const calcularMediaNotasAluno = (primeiraNota, segundaNota) => {
    const media = ((primeiraNota * 3.5) + (segundaNota * 7.5)) / (3.5 + 7.5);

    console.log('Media '.toUpperCase() + '= ' + media.toFixed(5));
}

lerPrimeiraNotaAluno();