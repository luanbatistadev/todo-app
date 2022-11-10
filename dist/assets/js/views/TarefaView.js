"use strict";
class TarefaView {
    constructor() {
        this.tabela = document.querySelector("#tabela-tarefas");
    }
    montar(lista) {
        lista.tarefas.map((tarefa) => {
            const linha = document.createElement("tr");
            const colunaDescricao = document.createElement("td");
            colunaDescricao.innerHTML = tarefa.descricao;
            const colunaData = document.createElement("td");
            colunaData.innerHTML = tarefa.data.toLocaleDateString();
            const colunaConcluida = document.createElement("td");
            colunaConcluida.innerHTML = tarefa.concluida ? "Sim" : "Não";
        });
    }
}
