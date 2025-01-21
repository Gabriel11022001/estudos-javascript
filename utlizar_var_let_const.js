// var
var nome = 'Gabriel Rodrigues dos Santos';
console.log(nome);

nome = 'Gabriel Rodrigues';
console.log(nome);

// let
let nomeCompleto = 'Gabriel Rodrigues dos Santos';
console.log(nomeCompleto);

nomeCompleto = 'Felipe da Silva';
console.log(nomeCompleto);

/**
 * var e let são variáveis, mas o correto é utilizar o let por conta
 * do problema de escopo
 * -> com o var eu posso acessar a variável fora do escopo onde ela foi
 * definida(desde que não seja o escopo de uma função), com o let eu só consigo acessar a variável
 * no espodo onde ela foi definida
 */
if (true) {
    var idade = 23;
    console.log(idade);
}

console.log(idade);

if (true) {
    let genero = 'Masculino';
    console.log(genero.toLocaleUpperCase());
}

// console.log(genero);
/**
 * o const funciona como o let, só consigo acessar o const no escopo
 * onde foi definido, mas o const é utilizado para declarar uma constante
 */
if (true) {
    const telefone = '(14) 99877-07654';
    console.log(telefone.toUpperCase());
}

// console.log(telefone);

const email = 'email@teste.com';
console.log(email);

// email = 'teste2@gmail.com';

/**
 * sempre que tiver um dado que não vai variar o valor, utilizar o const
 */

const pessoa = {
    nome: 'Gabriel',
    telefone: '(14) 99877-6543'
};

console.log(pessoa);

pessoa.nome = 'Gabriel Rodrigues dos Santos';

console.log(pessoa.nome);

// pessoa = {}; -> isso não pode

pessoa.email = 'gabriel@teste.com';

console.log(pessoa);