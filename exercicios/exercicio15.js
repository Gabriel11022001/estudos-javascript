function solution(number) {
    let somaMultiplos = 0;

    for (let contador = 0; contador < number; contador++) {

        if (contador % 3 == 0 || contador % 5 == 0) {
            somaMultiplos += contador;
        }

    }

    return somaMultiplos;
}

console.log(solution(10));