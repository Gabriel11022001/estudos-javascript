const idade = 23, estaAcompanhado = false;

if (idade >= 18 && estaAcompanhado) {
    console.log("Pode entrar na festa!");
    console.log("Executou no if do bloco que testa o and!");
} else if (idade >= 18 || estaAcompanhado) {
    console.log("Pode entrar na festa!");
    console.log("Executou no if do bloco que testa no or!");
} else {
    console.log("Não pode entrar na festa!");
}

const nomeCompleto = "Gabriel Rodrigues dos Santos";
const genero = "Masculino";
const email = "teste@teste.com";

if (nomeCompleto.trim() == "" || nomeCompleto.length > 100) {
    console.log("Nome completo inválido!");
} else if (genero.trim().toLowerCase() != "masculino"
&& genero.trim().toLowerCase() != "feminino"
&& genero.trim().toLowerCase() != "outro") {
    console.log("Gênero inválido!");
} else if (email.trim() == "") {
    console.log("E-mail inválido!");
} else {
    console.log("Todos os dados são válidos!");
    console.log(`Nome: ${ nomeCompleto }`);
    console.log(`E-mail: ${ email }`);
    console.log(`Gênero: ${ genero }`);
}

