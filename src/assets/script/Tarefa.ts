class Tarefa {
  constructor(descricao: string, data: Date) {
    this.descricao = descricao;
      this.data = data;
      this.concluida = false;
  }

  private descricao: string;
  private data: Date;
  private concluida: boolean;
}

const t1 = new Tarefa('Estudar TypeScript', new Date(2022-11-9));
console.log(t1);