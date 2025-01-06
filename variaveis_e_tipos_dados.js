/**
 * Em javascript, as variáveis são definidar por var ou let, e constantes, com const
 * javascript é uma lingugem de tipagem dinânmica, ou seja, uma variável pode armazenar
 * um dado de um tipo em sua declaração, e depois durante a execução do algoritmo, pode atribuir
 * um dado de outro tipo para a variavel
 */
const nomeCompleto = "Gabriel Rodrigues dos Santos"; // constante / string
let idade = 23; // variável com let / number
var sexo = "Masculino"; //variável com var / string

console.log("Nome completo " + nomeCompleto);
console.log("Idade: " + idade);
console.log("Sexo: " + sexo);

// string
const primeiroNome = "Gabriel";
const sobrenome = "Rodrigues";

const nomeCompleto2 = primeiroNome + " " + sobrenome;

console.log(nomeCompleto2);
console.log(typeof nomeCompleto2);

// interpolação
const nomeCompleto3 = `${ primeiroNome } ${ sobrenome }`;

console.log(`Nome completo 3: ${ nomeCompleto3 }`);

// number
/**
 * em js, tanto um inteiro como um float são do tipo number
 */
const primeiroValor = 22;
const segundoValor = 11.98;

console.log(primeiroValor + segundoValor);

console.log(typeof primeiroValor);
console.log(typeof segundoValor);

// boolean
const possuiCnh = true;
console.log(possuiCnh);
console.log(typeof possuiCnh);

// array
const nomes = ["Gabriel", "Pedro", "Maria", "Eduardo", "Fernando"];

console.log(nomes);

console.log(typeof nomes);

// objeto
const primeiroCliente = {
    nome: "Gabriel",
    telefone: "(14) 99877-65643",
    genero: "Masculino"
};

console.log(primeiroCliente);

console.log(typeof primeiroCliente);

console.log(primeiroCliente.nome);
console.log(primeiroCliente.telefone);
console.log(primeiroCliente.genero);

const clientes = [
    {
        nome: "Maria",
        email: "maria@teste.com"
    },
    {
        nome: "Eduarda",
        email: "eduarda@teste.com"
    },
    {
        nome: "Gabriel",
        email: "gabriel@teste.com"
    }
];

for (let contadorClientes = 0; contadorClientes < clientes.length; contadorClientes++) {
    const clienteApresentar = clientes[ contadorClientes ];
    
    console.log("=================================================");
    console.log(clienteApresentar.nome);
    console.log(clienteApresentar.email);
    console.log("=================================================");
}