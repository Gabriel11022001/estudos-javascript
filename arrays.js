const nomes = ['Gabriel', 'Maria', 'Eduarda', 'Fernanda', 'Pedro'];

console.log(nomes);

console.log(nomes[ 0 ]); // apresentar elemento no primeiro indice
console.log(nomes[ nomes.length - 1 ]); // apresentar elemento no ultimo indice

// em javascript os arrays não possuem um tamanho limite
// em javascript eu posso criar um array contendo dados de tipos diferentes
const dados = ['Gabriel', 'Maria', 22, 11.98, false, null, { nome: 'Gabriel', telefone: '14998776555' }];

// dados.length -> obter o tamanho do array
for (let i = 0; i < dados.length; i++) {
    console.log(dados[ i ]);
    console.log(typeof(dados[ i ]));
}

// também posso declarar arrays dessa forma
const notas = new Array(10, 8.98, 7,.87);

notas.forEach((nota) => {
    console.log(nota);
});

dados.forEach(dado => console.log(dado));

// adicionando o valor a partir do indice
dados[ dados.length ] = 'Dado adicionado de teste';

console.log(dados);

// adicionando pelo método push() -> adiciona no final do array
dados.push('Segundo dado adicionado de teste!');
dados.push('Terceiro dado adicionado de teste!');
dados.push(22);
console.log(dados);

// obter tamanho do array
console.log(dados.length);

// adicionar elemento na primeira posição do array
let clientes = ['Gabriel', 'Fernanda', 'Eduardo', 'Mario'];

function adicionarClienteInicioArray() {
    const clientesNovo = [];
    clientesNovo.push('Eduarda');

    for (let contador = 0; contador < clientes.length; contador++) {
        clientesNovo.push(clientes[ contador ]);
    }

    clientes = clientesNovo;
}

adicionarClienteInicioArray();

console.log(clientes);

// ordenar os dados de um array
const clientesOrdenados = clientes.sort();

console.log(clientesOrdenados);

const numeros = [11.98, 2.98, 1.98];

console.log(numeros.sort());

/**
 * a ordenação de floats não funciona assim, pois o método sort()
 * considera tudo como string, para inteiros existe o mesmo problema
 */

// ordenar array de numeros
console.log(numeros.sort((primeiroValor, segundoValor) => {

    return primeiroValor - segundoValor;
}));

// remover elementos do array
// a partir do indice 2 delete 1 elemento do array
console.log(numeros);

numeros.splice(2, 1);

console.log(numeros);

// removendo o ultimo elemento do array
const produtos = ['Banana', 'Refrigerante', 'Bola de futebol', 'Bala de morango'];

console.log(produtos);
produtos.pop(); // remover o ultimo elemento
console.log(produtos);

// remover o primeiro elemento do array
produtos.shift();
console.log(produtos);

// matriz
const numerosMatriz = [
    [ 1, 2, 4, 5, 3, 12 ],
    [ 1, 2, 1, 2, 3, 22 ],
    [ 1, 2, 4 ]
];

for (let contador = 0; contador < numerosMatriz.length; contador++) {

    for (let contadorInterno = 0; contadorInterno < numerosMatriz[ contador ].length; contadorInterno++) {
        console.log('linha => ' + contador + " número => " + numerosMatriz[ contador ][ contadorInterno ]);
    }

}

const nomes2 = ['Gabriel', 'Pedro', 'Gabriel', 'Maria', 'Fernando', 'Pedro', 'Gabriel', 'Maria', 'Eduardo'];
const nomesJaforamContados = [];

for (let contador = 0; contador < nomes2.length; contador++) {
    const nomeAtualTestar = nomes2[ contador ];
    let contadorVezesNomeApareceu = 0;

    for (let contadorInterno = 0; contadorInterno < nomes2.length; contadorInterno++) {

        if (!nomesJaforamContados.includes(nomeAtualTestar)) {
            
            if (nomes2[ contadorInterno ] == nomeAtualTestar) {
                contadorVezesNomeApareceu++;
            }

        }

    }
    
    if (!nomesJaforamContados.includes(nomeAtualTestar)) {
        console.log(nomeAtualTestar + ' = ' + contadorVezesNomeApareceu);
    }

    nomesJaforamContados.push(nomeAtualTestar);
}