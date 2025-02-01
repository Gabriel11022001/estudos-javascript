function solution(str, ending) {
    
    if (ending.length > str.length) {

        return false;
    }

    if (ending.length == 1) {

        if (ending == str[ str.length - 1 ]) {

            return true;
        }

        return false;
    }
    
    if (ending.length == str.length)  {

        if (ending == str) {

            return true;
        }

        return false;
    }

    if (ending.length == 2) {

        if (ending[ 0 ] == str[ str.length - 2 ] && ending[ 1 ] == str[ str.length - 1 ]) {

            return true;
        }

        return false;
    }

    let ultimosCaracteresComparar = '';
    let caracteresTextoFinaisComparar = [];
    let quantidadeCaracteresFinaisObter = ending.length;
    let contador = str.length - 1;

    while (contador >= quantidadeCaracteresFinaisObter - 1) {
        caracteresTextoFinaisComparar.push(str[ contador ]);

        contador--;
    }

    for (let contador2 = caracteresTextoFinaisComparar.length - 1; contador2 >= 0; contador2--) {
        ultimosCaracteresComparar += caracteresTextoFinaisComparar[ contador2 ];
    }

    if (ultimosCaracteresComparar == ending) {

        return true;
    }

    return false;
}

console.log(solution('abcde', 'cde'));
