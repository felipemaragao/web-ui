export class Permissao {
  id: number;
  desricao: string;

}

export class Usuario {
  username: string;
  email: string;
  password: string;
  permissoes = new Array<Permissao>();

}
