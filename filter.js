// método para filtrar os dados de um array e obter um novo array com os valores que eu quiser

const numeros = [1, 2, 3, 4, 5, 6];

const pares = numeros.filter((numero) => {

    if (numero % 2 == 0) {

        return true;
    }

    return false;
});

console.log(numeros);
console.log(pares);

const impares = numeros.filter((numero) => {

    return numero % 2 != 0;
});

console.log(impares);

const telefones = ['14998776655', '14998787654', '14998787654', '1499878765', '1499878765', '1499878765', '14998787654', '14998787654'];

const telefonesSemRepeticao = [];

telefones.forEach((telefone) => {

    if (!telefonesSemRepeticao.includes(telefone)) {
        telefonesSemRepeticao.push(telefone);
    }

});

console.log(telefones);
console.log(telefonesSemRepeticao);