const genero = "m";

if (genero == "m") {
    var mensagem = "Gênero masculino!";
}

console.log(genero);

/**
 * a variável mensagem definida no escopo
 * do bloco if, pode ser acessada fora do bloco do if
 * -> se você definir uma variável no escopo de um if-else ou de um laço de repetição,
 * você pode acessar essa variável em outros escopos
 */
console.log(mensagem);

function apresentarMensagemQualquer() {
    var msg = "Seja bem vindo";

    console.log(msg);
}

apresentarMensagemQualquer();

/**
 * agora uma variável declarada no escopo de uma função, já
 * não é possível acessar fora do bloco da função
 * -> se declarar uma variável dentro do bloco de uma função, essa variável só
 * pode ser acessada dentro do bloco da própria função
 */
// console.log(msg);

/**
 * com o let é diferente, com o let, só podemos acessar o valor da variável no escopo onde ela foi
 * definida
 */
const idade = 22;

if (idade >= 18) {
    let maiorIdade = true;
} else {
    let maiorIdade = false;
}

// console.log(maiorIdade);

/**
 * o const funciona da mesma forma que o let
 */
if (true) {
    const teste = 22;
}

// console.log(teste);

// -> sempre que possível trabalhare com variáveis locais e não globais
// -> priorizar utilizar const, mas se precisar de reatribuição, criar variável com o let e nunca com o var