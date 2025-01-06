// console.log() -> apresentar mensagem no console
console.log('Apresentando mensagem qualquer no console')

// -> comentário de linha unica
/***
 * comentário de multiplas linhas
 */

// javascript é uma linguagem de tipagem dinâmica
/**
 * em js eu posso utlizar aspas simples, duplas ou `` para definir strings
 */
var nome = 'Gabriel Rodrigues dos Santos'
console.log('nome: ' + nome)

var idade = 23
var genero = 'Masculino'
var possuiCnh = true
var salario = 120000.99

console.log('Nome completo: ' + nome)
console.log('Idade: ' + idade)
console.log('Genero: ' + genero)
console.log('Possui cnh? ' + possuiCnh ? 'Sim' : 'Não')
console.log('Salário: ' + salario)

/**
 * posso declarar variáveis com var, mas o ideal mesmo é utilizar o let
 */
let nomeCompleto = 'Gabriel Rodrigues dos Santos'
console.log(nomeCompleto)

// tanto com o var como com o let eu posso alterar o valor atribuido as variaveis
nomeCompleto = 'Gabriel Rodrigues dos Santos'.toUpperCase()
nome = 'Gabriel Rodrigues'.toLowerCase()

// const -> constantes
const dataNascimento = '11/02/2001'
console.log('Data de nascimento: ' + dataNascimento)

console.log(typeof nome)
console.log(typeof nomeCompleto)
// tando o inteiro como um dado double são do tipo number
console.log(typeof idade)
console.log(typeof salario)
console.log(typeof possuiCnh)

let variavelNulo = null

console.log(variavelNulo)
console.log(typeof variavelNulo)

// undefined -> quando a variável não possui valor atribuido
let variavelIndefinida

console.log(variavelIndefinida)
console.log(typeof variavelIndefinida)