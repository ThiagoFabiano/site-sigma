export class ProdutoListarModel{
  id?: number | null;
  nome?: string | null;
  descricao?: string | null;
  valor?: string | null;
  pathImagens?: string[] | null;
  constructor(dados: {
    id?: number | null;
    nome?: string | null;
    descricao?: string | null;
    valor?: string | null;
    pathImagens?: string[] | null;
  }){
    this.id = dados.id
    this.nome = dados.nome
    this.descricao = dados.descricao
    this.valor = dados.valor
    this.pathImagens = dados.pathImagens

  }
}


