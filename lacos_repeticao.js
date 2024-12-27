// while
let contador = 0;

while (contador < 100) {
    console.log("Valor: " + contador);

    contador++; // contador = contador + 1
}

contador = 1;

while (contador <= 100) {
    console.log("============= Teste contador " + contador + " ================");

    contador += 1; // contador = contador + 1
}   

contador = 100;

while (contador >= 1) {
    console.log(`========== Teste contador inverso ${ contador }  ==========`);

    contador -= 1; // contador = contador - 1
}

console.log(`Valor do contador depois do while de cima ${ contador }`);

// array no javascript
const pessoas = ["Gabriel", "Maria", "Pedro", "Eduardo", "Fernando", "José"];
let contadorPessoas = 0;

while (contadorPessoas < pessoas.length) {
    console.log(`Pessoa: ${ pessoas[ contadorPessoas ] }`);

    contadorPessoas++;
}

// for
for (let contador = 0; contador < 100; contador++) {
    console.log(`Contador no for: ${ contador }`);
}

for (let contadorPessoas = 0; contadorPessoas < pessoas.length; contadorPessoas++) {
    const pessoa = pessoas[ contadorPessoas ].toUpperCase();

    console.log(pessoa);
}

// do-while
contador = 0;

do {
    console.log(`Contador no do-while: ${ contador }`);
    
    contador++;
} while(contador < 100);

// foreach
const produtos = [
    {
        nome: "Produto 1",
        precoVenda: 22.98
    },
    {
        nome: "Produto 2",
        precoVenda: 22.77
    },
    {
        nome: "Produto 3",
        precoVenda: 11.98
    }
];

produtos.forEach((produto) => {
    console.log("=========================================================");
    console.log("Nome do produto: " + produto.nome.toUpperCase());
    console.log("Preço de venda do produto: " + produto.precoVenda);
    console.log("=========================================================");
});