class Pessoa {

    // definir propriedades
    /**
     * em javascript, não existe o conceito de encapsulamento, como existe
     * em outras linguagens orientadas a objeto(Java, C#, PHP, etc..,), ou seja,
     * todos os membros das classes são públicos
     */
    constructor() {
        this.nome = '';
        this.idade = 0;
        this.genero = '';
    }

    apresentarDadosPessoa() {
        // eu acesso os atributos ou outros métodos por meio da palavra reservada this
        console.log(`Nome: ${ this.nome.toUpperCase() }`);
        console.log(`Idade: ${ this.idade }`);
        console.log(`Gênero: ${ this.genero }`);
    }

    apresentarDadosPessoaComMensagem(msgApresentar) {
        console.log(msgApresentar);
        this.apresentarDadosPessoa();
    }    

}

const primeiraPessoa = new Pessoa();
const segundaPessoa = new Pessoa();
const terceiraPessoa = new Pessoa();

console.log(primeiraPessoa);
console.log(segundaPessoa);
console.log(terceiraPessoa);

primeiraPessoa.nome = 'Gabriel Rodrigues dos Santos';
primeiraPessoa.idade = 23;
primeiraPessoa.genero = 'masculino';

segundaPessoa.nome = 'Maria Eduarda';
segundaPessoa.genero = 'feminino';
segundaPessoa.idade = 22;

terceiraPessoa.nome = 'Eduardo Pereira da Silva';
terceiraPessoa.idade = 33;
terceiraPessoa.genero = 'masculino';

console.log(primeiraPessoa);
console.log(segundaPessoa);
console.log(terceiraPessoa);

primeiraPessoa.apresentarDadosPessoa();
segundaPessoa.apresentarDadosPessoa();
terceiraPessoa.apresentarDadosPessoa();

primeiraPessoa.apresentarDadosPessoaComMensagem('Seja bem vindo');
segundaPessoa.apresentarDadosPessoaComMensagem('Fala meu querido');
terceiraPessoa.apresentarDadosPessoaComMensagem('Olá!');

class CalculadoraSimples {

    somar(primeiroValor, segundoValor) {

        return primeiroValor + segundoValor;
    }

    subtrair(primeiroValor, segundoValor) {

        return primeiroValor - segundoValor;
    }

    multiplicar(primeiroValor, segundoValor) {

        return primeiroValor * segundoValor;
    }

    dividir(primeiroValor, segundoValor) {

        if (primeiroValor == 0 || segundoValor == 0) {

            throw Error('Valores inválidos para dividir!');
        }

        return primeiroValor / segundoValor;
    }

}

const calculadoraSimples = new CalculadoraSimples();

console.log(calculadoraSimples.somar(22, 11));
console.log(calculadoraSimples.subtrair(22, 11));
console.log(calculadoraSimples.multiplicar(11, 2));
console.log(calculadoraSimples.dividir(22.4, 1.98));

class Produto {

    constructor() {
        this._nomeProduto = '';
        this._precoVenda = 0;
    }

    // getters e setters
    set nomeProduto(nome) {

        if (nome.trim() == '') {
            this._nomeProduto = 'Nome não informado';
        } else {
            this._nomeProduto = nome;
        }

    }

    get nomeProduto() {

        return this._nomeProduto;
    }

    set precoVenda(precoVenda) {

        if (precoVenda < 0) {
            this._precoVenda = 0;
        } else {
            this._precoVenda = parseFloat(precoVenda.toFixed(2));
        }

    }

    get precoVenda() {

        return this._precoVenda;
    }

    apresentar() {
        console.log('Nome do produto: ' + this.nomeProduto);
        console.log('Preço de venda do produto: R$' + this.precoVenda);
    }

}

const primeiroProduto = new Produto();

primeiroProduto.nomeProduto = 'Produto 1';
primeiroProduto.precoVenda = 12.99898888;

primeiroProduto.apresentar();

const objetoTeste = new Object();

objetoTeste.nome = 'Gabriel';
objetoTeste.idade = 23;

console.log(objetoTeste);

delete objetoTeste.nome;

console.log(objetoTeste);

objetoTeste.genero = 'masculino';

console.log(objetoTeste.idade);
console.log(objetoTeste.genero);

objetoTeste.apresentarInformacoes = function () {
    console.log(this.idade);
    console.log(this.genero);
}

objetoTeste.apresentarInformacoes();

// também posso declarar objetos da seguinte forma: (mais utilizada)
const gabriel = {
    nome: 'Gabriel Rodrigues dos Santos',
    idade: 23,
    genero: 'Masculino',
    endereco: {
        cep: '19690-000',
        rua: 'Rua de teste',
        bairro: 'Bairro de teste',
        numero: '123',
        cidade: 'Bastos',
        uf: 'SP'
    },
    /**
     * posso implementar métodos nos objetos dessa forma, mas para acessar as propriedades,
     * só posso utilizar funções normais, arrow functions não funcionam nesse caso
     */
    apresentarDados: function () {
        console.log(this.nome);
        console.log(this.idade);
        
        if (this.genero != undefined) {
            console.log(this.genero);
        }

        console.log(this.endereco);
    }
};

console.log(gabriel);
console.log(gabriel.nome);
console.log(gabriel.idade);
console.log(gabriel.genero.toUpperCase());
console.log(gabriel.endereco.cep);
console.log(gabriel.endereco.cidade);
console.log(gabriel.endereco.rua);
console.log(gabriel.endereco.bairro);
console.log(gabriel.endereco.numero);
console.log(gabriel.endereco.uf);

gabriel.apresentarDados();

gabriel.nome = 'Gabriel Rodrigues dos Santos'.toUpperCase();

console.log(gabriel.nome);

delete gabriel.genero;

console.log(gabriel);

gabriel.nome = 'Gabriel de teste 122';
gabriel.apresentarDados();