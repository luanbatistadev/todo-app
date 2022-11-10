class TarefasLista {
  private _tarefas: Tarefa[];
  public get tarefas(): Tarefa[] {
    return this._tarefas;
  }
  public set tarefas(value: Tarefa[]) {
    this._tarefas = value;
  }

  constructor() {
    this._tarefas = [];
  }

  adicionar(tarefa: Tarefa) {
    this.tarefas.push(tarefa);
  }
}
