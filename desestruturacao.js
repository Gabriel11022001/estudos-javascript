const pessoas = ['Gabriel', 'Maria', 'Fernanda'];

// destructuring com arrays
let [ gabriel, maria, fernanda ] = pessoas;

console.log(pessoas);

console.log(gabriel);
console.log(maria);
console.log(fernanda);

gabriel = 'Gabriel Rodrigues';

console.log(gabriel);

// com objetos
const produto = {
    id: 1,
    nome: 'Produto de teste 1',
    precoVenda: 29.98
};

console.log(produto);

let { id, nome, precoVenda } = produto;

console.log('id do produto: ' + id);
console.log('nome do produto: ' + nome);
console.log('preço do produto: ' + precoVenda);

const cliente = {
    idCliente: 1,
    nomeCliente: 'Cliente 1',
    apresentarDadosCliente: function (idCliente, nomeCliente) {
        console.log(`id do cliente: ${ idCliente }`);
        console.log(`nome do cliente: ${ nomeCliente }`);
    }
};


const { idCliente, nomeCliente, apresentarDadosCliente } = cliente;

console.log(cliente);
console.log(idCliente);
console.log(nomeCliente);

apresentarDadosCliente(idCliente, nomeCliente);

const veiculo = {
    idVeiculo: 1,
    modelo: 'Honda Civic'
};

const { modelo } = veiculo;

console.log(veiculo);
console.log(modelo);