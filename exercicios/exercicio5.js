// tabuada de 1 a 10

for (let contador = 1; contador <= 10; contador++) {
    console.log("=================== Tabuada do " + contador + " ======================");

    for (let contadorInterno = 1; contadorInterno <= 10; contadorInterno++) {
        console.log(`${ contador } X ${ contadorInterno } = ${ contador * contadorInterno }`);
    }

}

