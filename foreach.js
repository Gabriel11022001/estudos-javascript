const pessoas = [
    'Gabriel', 
    'Maria',
    'Fernanda',
    'Eduardo',
    'Pedro'
];

/**
 * o método forEach serve para percorrer os elementos de um array
 * esse método espera uma função anônima que espera um parâmetro que
 * é o elemento do array que você está pegando no indice do loop
 */

pessoas.forEach((pessoa) => {
    console.log('Pessoa: ' + pessoa);
});

// também posso informar no segundo parâmetro o indice do elemento
pessoas.forEach((pessoa, indice) => {
    console.log('pessoa no indice ' + indice + ' = ' + pessoa);
});

pessoas.forEach(pessoa => console.log(pessoa.toLocaleUpperCase()));

pessoas.forEach(function (pessoa, indice) {
    console.log(pessoa);
    console.log(indice);
});

let soma = 0;

const numeros = [1, 2, 455, 22, 33];

numeros.forEach((num) => {
    console.log(num);
    soma += num;
});

console.log(soma);

const pares = [];
const impares = [];

numeros.forEach((numero) => {

    if (numero % 2 == 0) {
        pares.push(numero);

        return;
    }

    impares.push(numero);
});

console.log(pares);
console.log(impares);

const produtos = [
    {
        id: 1,
        nome: 'produto 1',
        precoCompra: 22.98,
        precoVenda: 30.98,
        ativo: true
    },
    {
        id: 2,
        nome: 'produto 2',
        precoCompra: 22.98,
        precoVenda: 30.98,
        ativo: true
    },
    {
        id: 3,
        nome: 'produto 3',
        precoCompra: 22.98,
        precoVenda: 30.98,
        ativo: true
    }
];

produtos.forEach(function (produto) {
    // console.log(produto);
    console.log('==========================================================');
    console.log('id => ' + produto.id);
    console.log('nome => ' + produto.nome);
    console.log('preço de compra: ' + produto.precoCompra);
    console.log('preço de venda: ' + produto.precoVenda);
    console.log(produto.ativo ? 'produto ativo' : 'produto inativo');
});