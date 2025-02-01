function showMe(yourID) {
    const nome = yourID.trim();

    if (nome.includes('-')) {
        const nomeQuebrado = nome.split('-');
        let nomeCorreto = true;

        for (let contadorNome = 0; contadorNome < nomeQuebrado.length; contadorNome++) {
            
            if (!validarNomeEstaFormatoCorreto(nomeQuebrado[ contadorNome ])) {
                nomeCorreto = false;
            }

        }

        return nomeCorreto;
    } else {
        const nomeQuebradoDois = nome.split(' ');
        let nomeValido = true;

        if (nomeQuebradoDois.length > 0) {
            let nomeAtualValido = true;
            const letrasAlfabeto = [
                'a',
                'b',
                'c',
                'd',
                'e',
                'f',
                'g',
                'h',
                'i',
                'j',
                'k',
                'l',
                'm',
                'n',
                'o',
                'p',
                'q',
                'r',
                's',
                't',
                'u',
                'v',
                'w',
                'x',
                'y',
                'z'
            ];

            nomeQuebradoDois.forEach((nome, indice) => {

                if (indice > 0 && !letrasAlfabeto.includes(nome[ 0 ])) {
                    nomeAtualValido = false;
                }

            });

            if (!nomeAtualValido) {
                nomeValido = false;
            }
            
        } else {

            if (!validarNomeEstaFormatoCorreto(nome)) {
                nomeValido = false;   
            }

        }

        return nomeValido;
    }

}

function validarNomeEstaFormatoCorreto(nome) {
    const letrasAlfabeto = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z'
    ];
    let nomeFormatoCorreto = true;
    const primeiroCaractrerNome = nome[ 0 ];
    const demaisCaracteresNome = nome.split('').filter((caracter, indice) => {

        if (indice > 0) {

            return caracter;
        }

    });

    letrasAlfabeto.forEach((letra) => {

        if (letra.toUpperCase() == primeiroCaractrerNome) {
            nomeFormatoCorreto = true;
        }

    });

    demaisCaracteresNome.forEach((letraNomeAtual) => {

        if (!letrasAlfabeto.includes(letraNomeAtual)) {
            nomeFormatoCorreto = false;
        }

    });

    return nomeFormatoCorreto;
}

console.log(showMe('Bernard-Henry-Levy'));
console.log(showMe('Francis'));
console.log(showMe('Le Mec'));