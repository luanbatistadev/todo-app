class Tarefa {
  constructor(descricao: string, data: Date) {
    this.descricao = descricao;
      this.data = data;
      this.concluida = false;
  }

   descricao: string;
   data: Date;
   concluida: boolean;
}

