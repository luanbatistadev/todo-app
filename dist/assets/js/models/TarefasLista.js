"use strict";
class TarefasLista {
    constructor() {
        this._tarefas = [];
    }
    get tarefas() {
        return this._tarefas;
    }
    set tarefas(value) {
        this._tarefas = value;
    }
    adicionar(tarefa) {
        this.tarefas.push(tarefa);
    }
}
