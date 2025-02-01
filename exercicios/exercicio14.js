function digitalRoot(n) {
    return quebrarNumeroESomar(n);
}

const quebrarNumeroESomar = (numero) => {
    let numeroString = numero.toString();
    const caracteresNumero = numeroString.split('');
    let somaNumeroExterior = 0;

    for (let contador = 0; contador < caracteresNumero.length; contador++) {
        somaNumeroExterior += parseInt(caracteresNumero[ contador ]);
    }
    
    if (somaNumeroExterior <= 10) {

        return somaNumeroExterior;
    }

    // somar numeros interiores
    let numeroInteriorString = somaNumeroExterior.toString();
    let caracteresSomaNumeros = numeroInteriorString.split('');
    let somaNumerosInteriores = 0;

    for (let contador = 0; contador < caracteresSomaNumeros.length; contador++) {
        somaNumerosInteriores += parseInt(caracteresSomaNumeros[ contador ]);
    }

    return somaNumerosInteriores;
}

console.log(digitalRoot(22));