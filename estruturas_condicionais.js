let nomeCompleto = "Gabriel Rodrigues dos Santos";

if (nomeCompleto.length >= 10) {
    console.log("O nome possui pelo menos 10 caracteres!!");
} else {
    console.log("O nome não possui nem 10 caracteres!");
}

const primeiroValor = 1;
const segundoValor = 22;

if (primeiroValor > segundoValor) {
    console.log("O primeiro valor é maior que o segundo valor!");
} else if (primeiroValor < segundoValor) {
    console.log("O primeiro valor é menor que o segundo valor!");
} else {
    console.log("O primeiro valor e o segundo valor são iguais!");
}

const idade = 17;
const estaAcompanhado = true;

if (idade >= 18 || estaAcompanhado) {
    console.log("Pode entrar na festa!");
} else {
    console.log("Não pode entrar na festa!");
}

const mesAtual = "Janeiro";

if (mesAtual < 1 || mesAtual > 12) {
    console.log("Mês inválido!");
} else if (mesAtual == "Janeiro") {
    console.log("Número do mês: " + 1);
} else if (mesAtual == "Fevereiro") {
    console.log("Mês atual: " + 2);
} else {
    console.log("Mês fora do intervalo!");
}

switch (mesAtual) {
    case "Janeiro":
        console.log("Número do mês: " + 1);
        break;
    case "Fevereiro":
        console.log("Número do mês: " + 2);
        break;
    default:
        console.log("Mês inválido!");
}

// operadores lógicos no javascript
const primeiroNome = "Gabriel";
const sobrenome = "";

console.log(primeiroNome != "" && sobrenome != "");
console.log(primeiroNome != "" || sobrenome != "");

const teste = false;

// negação
console.log(!teste);