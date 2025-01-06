const primeiroCliente = {
    nome: 'Gabriel',
    telefone: '(14) 99877-6543',
    genero: 'Masculino',
    idade: 23
}

const segundoCliente = {
    nome: 'Pedro',
    telefone: '(14) 99877-6543',
    genero: 'Masculino',
    idade: 24
}

// igual a
if (primeiroCliente.nome == segundoCliente.nome) {
    console.log('Possuem o mesmo nome!')
} else {
    console.log('Não possuem o mesmo nome!')
}

if (primeiroCliente.idade > segundoCliente.idade) { // maior que
    console.log(primeiroCliente.nome + ' é mais velho que ' + segundoCliente.nome)
} else if (primeiroCliente.idade < segundoCliente.idade) { // menor que
    console.log(primeiroCliente.nome + ' é mais novo que ' + segundoCliente.nome)
} else {
    console.log(primeiroCliente.nome + ' e ' + segundoCliente.nome + ' possuem a mesma idade!')
}

// maior ou igual a
console.log(12 >= 11) // true

// menor ou igual a
console.log(11 <= 12) // true

// diferente de
console.log(11 != 2) // true