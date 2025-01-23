const nome = 'Gabriel';
const sobrenome = 'Rodrigues';

console.log(nome + ' ' + sobrenome);

const idade = 23;

console.log(nome + ' ' + sobrenome + ' possui ' + idade + ' anos de idade');

// template string
console.log(`${ nome } ${ sobrenome } possui ${ idade } anos de idade!`);

const possuiHabilitacao = true;

console.log(`${ nome } ${ sobrenome } ${ possuiHabilitacao ? 'possui habilitação' : 'não possui habilitação' }`);