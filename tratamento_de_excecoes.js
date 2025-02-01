console.log('teste');
console.log('teste');
console.log('teste');
console.log('teste');

// console.log(telefone);

try {
    console.log(telefone);
} catch (e) {
    console.log('erro: ' + e);
    console.log(e.name); // nome da exceção
    console.log(e.message); // mensagem da exceção
} finally {
    console.log('executando o finally!');
}

// lançar uma exceção
function dividir(primeiroValor, segundoValor) {

    if (primeiroValor == 0 || segundoValor == 0) {
        throw('Os valores não podem ser iguais a 0!');
    }

    return primeiroValor / segundoValor;
}

// console.log(dividir(11, 22));
// console.log(dividir(0, 11));

try {
    console.log(dividir(0, 11));
} catch (e) {   
    console.log(e);
    console.log(e.name);
    console.log(e.message);
    console.log('não foi possível dividir!');
}