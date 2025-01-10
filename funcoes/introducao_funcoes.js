// função padrão
function somar(primeiroValor, segundoValor) {
    console.log(primeiroValor + segundoValor);
}

// função retornando valor
function somarRetornandoValor(primeiroValor, segundoValor) {

    return primeiroValor + segundoValor;
}

somar(11, 200);
somar(1, 2.98);
console.log(somarRetornandoValor(100, 100));

const resultadoSoma = somarRetornandoValor(11, 22);

console.log(resultadoSoma);

// se eu tiver um var fora do escopo da função, eu posso acessar ele no escopo da função normalmente
var nome = "Gabriel Rodrigues dos Santos";

function apresentarNome() {
    console.log(nome);
}

apresentarNome();

// mas eu não posso alterar o valor da variável, somente ler mesmo
function alterarNome() {
    nome = "Maria Fernanda da Silva";
}

console.log(nome);

// com o let, eu também posso acessar no escopo da função sem passar como parâmetro
let idade = 22;

function apresentarIdade() {
    console.log(idade);
}

apresentarIdade();

// mas também não é possível alterar o valor
function alterarIdade() {
    idade = 44;
}

console.log(idade);

// com const é a mesma coisa
const genero = "Masculino";

function apresentarGenero() {
    console.log(genero);
}

apresentarGenero();