function strong(n) {
  
    if (n <= 10) {
        let fatorialNum = 1;

        for (let contador = n; contador > 0; contador--) {
            fatorialNum = fatorialNum * contador;
        }

        if (fatorialNum == n) {

            return 'STRONG!!!!';
        }

        return 'Not Strong !!';
    }
    
    const numeroString = n.toString();
    const numeros = numeroString.split('');
    const fatoriaisNumeros = [];

    // encontrar o fatorial de cada número
    for (let contador = 0; contador < numeros.length; contador++) {
        let fatorialNumero = 1;

        for (let contadorInterno = numeros[ contador ]; contadorInterno > 0; contadorInterno--) {
            fatorialNumero = fatorialNumero * contadorInterno;            
        }

        fatoriaisNumeros.push(fatorialNumero);
    }

    let somaFatoriaisNumeros = 0;

    fatoriaisNumeros.forEach((fatorial) => {
        somaFatoriaisNumeros += fatorial;
    });

    if (somaFatoriaisNumeros == n) {

        return 'STRONG!!!!';
    }

    return 'Not Strong !!';
}

console.log(strong(7));