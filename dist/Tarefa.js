"use strict";
class Tarefa {
    constructor(descricao, data) {
        this.descricao = descricao;
        this.data = data;
        this.concluida = false;
    }
}
const t1 = new Tarefa('Estudar TypeScript', new Date(2022 - 11 - 9));
console.log(t1);
