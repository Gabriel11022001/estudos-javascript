/**
 * 2) Desenvolver um algoritmo que leia a altura de pessoas. Este programa deverá calcular e mostrar : 
 * a. A menor altura do grupo; 
 * b. A maior altura do grupo;
 */

const alturas = [1.98, 1.87, 1.87, 1.56, 1.76, 1.90, 1.67, 2.10]

alturas.forEach((altura) => {
    console.log(altura)
})

let maiorAltura = 0
let menorAltura = 99999999999

for (let contador = 0; contador < alturas.length; contador++) {
    const alturaAtual = alturas[ contador ]

    if (alturaAtual > maiorAltura) {
        maiorAltura = alturaAtual
    } else if (alturaAtual < menorAltura) {
        menorAltura = alturaAtual
    }

}

console.log(alturas)

console.log('Maior altura: ' + maiorAltura)
console.log('Menor altura: ' + menorAltura)