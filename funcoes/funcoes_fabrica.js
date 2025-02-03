// são funções que retornam objetos
function gerarCurso(nomeCurso, precoVenda) {
    const percentualDesconto = 10;
    
    return {
        nome: nomeCurso.toUpperCase(),
        precoVenda: parseFloat((precoVenda - ((percentualDesconto / 100) * precoVenda)).toFixed(2))
    };
}

const cursos = [];

for (let contador = 0; contador < 10; contador++) {
    cursos.push(gerarCurso('Curso ' + contador + 1, 19.90 + contador));
}

console.log(cursos);