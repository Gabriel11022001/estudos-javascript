let tarefas = [];

function registrarTarefa(tarefaRegistrar) {
    
    if (tarefaRegistrar.id <= 0) {
        
        throw Error('Informe o id da tarefa!');
    }

    if (tarefaRegistrar.nome.trim() == '') {

        throw Error('Informe o nome da tarefa!');
    }

    // validar se já existe outra tarefa cadastrada com o mesmo id
    if (validarJaExisteOutraTarefaMesmoDado(tarefaRegistrar.id, 'id')) {

        throw Error('Já existe outra tarefa cadastrada com esse id!');
    }

    // validar se já existe outra tarefa cadastrada com o mesmo nome
    if (validarJaExisteOutraTarefaMesmoDado(tarefaRegistrar.nome, 'nome')) {
        
        throw Error('Já existe outra tarefa cadastrada com o mesmo nome!');
    }

    tarefas.push(tarefaRegistrar);
    console.log('Tarefa ' + tarefaRegistrar.nome + ' cadastrada com sucesso!');
}

function validarJaExisteOutraTarefaMesmoDado(dado, nomeDado) {
    
    if (nomeDado == 'id') {
        let existeOutraTarefaCadastradaMesmoId = false;

        tarefas.forEach((tarefa) => {

            if (tarefa.id == dado) {
                existeOutraTarefaCadastradaMesmoId = true;
            }

        });

        return existeOutraTarefaCadastradaMesmoId;
    }

    if (nomeDado == 'nome') {
        let existeOutraTarefaCadastradaMesmoNome = false;

        for (let contador = 0; contador < tarefas.length; contador++) {

            if (tarefas[ contador ].nome.trim() == dado.trim()) {
                existeOutraTarefaCadastradaMesmoNome = true;
            }

        }

        return existeOutraTarefaCadastradaMesmoNome;
    }

    return false;
}

function apresentarTodasTarefas() {

    tarefas.forEach((tarefaApresentar) => {
        console.log('============ tarefa =============');
        console.log(`id: ${ tarefaApresentar.id }`);
        console.log(`nome: ${ tarefaApresentar.nome }`);
        console.log(`concluída: ${ tarefaApresentar.concluido ? 'Sim' : 'Não' }`);
    });

}

function obterTarefaPeloId(idTarefa) {
    let tarefa = null;

    for (let contadorTarefas = 0; contadorTarefas < tarefas.length; contadorTarefas++) {

        if (tarefas[ contadorTarefas ].id == idTarefa) {
            tarefa = tarefas[ contadorTarefas ];
        }

    }

    if (tarefa == null) {
        console.log('Não existe uma tarefa cadastrada com esse id!');
    }

    return tarefa;
}

function removerTarefa(idTarefaRemover) {

    if (tarefas.length == 0) {
        console.log('Não existem tarefas cadastradas!');

        return;
    }

    let indiceTarefaRemover = -1;

    tarefas.forEach((tarefa, indice) => {

        if (tarefa.id == idTarefaRemover) {
            indiceTarefaRemover = indice;
        }

    });

    if (indiceTarefaRemover >= 0) {
        tarefas.splice(indiceTarefaRemover, 1);
        console.log('Tarefa removida com sucesso!');
    } else {
        console.log('Não existe uma tarefa cadastrada com esse id!');
    }

}

function editarTarefa(tarefaEditar) {

    if (obterTarefaPeloId(tarefaEditar.id) != null) {

        for (let contador = 0; contador < tarefas.length; contador++) {

            if (tarefas[ contador ].id == tarefaEditar.id) {
                tarefas[ contador ] = tarefaEditar;
                console.log('Tarefa editada com sucesso!');
            }

        }

    }

}

function removerTarefasConcluidas() {
    
    if (tarefas.length > 0) {
        
        for (let contador = 0; contador < tarefas.length; contador++) {

            if (tarefas[ contador ].concluido) {
                tarefas.splice(contador, 1);
            }

        }

        console.log('Tarefas concluídas removidas com sucesso!');
    } else {
        console.log('Não existem tarefas cadastradas!');
    }

}

function marcarTarefaComoConcluida(idTarefa) {

    for (let contador = 0; contador < tarefas.length; contador++) {

        if (tarefas[ contador ].id == idTarefa) {
            tarefas[ contador ].concluido = true;
            console.log('Tarefa marcada como concluída!');
        }

    }

}

function obterTotalTarefasPorStatus(obterPorStatus) {

    return obterPorStatus();
}

try {
    /*registrarTarefa({
        id: 1,
        nome: 'Tarefa 1',
        concluida: false
    });
    registrarTarefa({
        id: 2,
        nome: 'Tarefa 2',
        concluida: false
    });*/

    // registrar 1000 tarefas
    for (let contador = 0; contador < 1000; contador++) {
        const tarefa = {
            id: contador + 1,
            nome: `Tarefa ${ contador + 1 }`,
            concluido: false
        };

        registrarTarefa(tarefa);
    }

    apresentarTodasTarefas();

    const tarefaConsultada = obterTarefaPeloId(1);
    console.log(tarefaConsultada);

    const segundaTarefaConsultada = obterTarefaPeloId(986565555);
    console.log(segundaTarefaConsultada);

    removerTarefa(1);

    apresentarTodasTarefas();

    obterTarefaPeloId(1);

    removerTarefa(99999999999);

    editarTarefa({
        id: 2,
        nome: 'Tarefa 2 editada',
        concluido: true
    });

    console.log(obterTarefaPeloId(2));

    removerTarefasConcluidas();

    obterTarefaPeloId(2);

    marcarTarefaComoConcluida(5);

    tarefas.forEach((tarefa, indice) => {
        
        if (indice <= 100) {
            marcarTarefaComoConcluida(tarefa.id);
        }

    });

    apresentarTodasTarefas();

    removerTarefasConcluidas();

    apresentarTodasTarefas();

    const totalTarefasConcluidas = obterTotalTarefasPorStatus(() => {
        let totalTarefasConcluidas = 0;

        tarefas.forEach((tarefa) => {

            if (tarefa.concluido) {
                totalTarefasConcluidas++;
            }

        });

        return totalTarefasConcluidas;
    });

    const totalTarefasNaoConcluidas = obterTotalTarefasPorStatus(() => {
        let totalTarefasNaoConcluidas = 0;

        tarefas.forEach((tarefa) => {

            if (!tarefa.concluido) {
                totalTarefasNaoConcluidas++;
            }

        });

        return totalTarefasNaoConcluidas;
    });

    console.log(`Total de tarefas concluídas: ${ totalTarefasConcluidas }`);
    console.log(`Total de tarefas não concluídas: ${ totalTarefasNaoConcluidas }`);
} catch (e) {
    console.log(e.message);
}