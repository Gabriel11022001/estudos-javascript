const pessoas = ['Gabriel', 'Maria', 'Pedro', 'José'];

// utilizamos o map para relizar transformações no array
const pessoasTudosMaiusculo = pessoas.map((pessoa) => {

    return pessoa.toUpperCase();
});

console.log(pessoas);
console.log(pessoasTudosMaiusculo);

const pessoasDuplicados = pessoas.map((pessoa) => {
    
    return [ pessoa, pessoa ];
});

console.log(pessoasDuplicados);

const numeros = [1, 2, 55, 3, 4, 55, 33, 22, 11];

// dobrar os valores
const arrayResultado = numeros.map((numero) => {

    return numero * 2;
}).map((numero) => {
    // somar 2

    return numero + 2;
}).map((numero) => {
    // subtrair 4

    return numero - 4;
});

console.log(arrayResultado);