import { Injectable } from '@angular/core';
import { ProdutoListarModel } from '../core/models/produto.model';

@Injectable({providedIn: 'root'})
export class HomeService {
  constructor() { }
  produtos: ProdutoListarModel[] = [
    new ProdutoListarModel({
      id: 1,
      nome: 'Caneca Porcelana Branca',
      valor: 'R$ 33,00',
      pathImagens:
      [
        'CANECAS/1.png',
        'CANECAS/2.png',
        'CANECAS/3.png',
        'CANECAS/4.png',
        'CANECAS/5.png',
        'CANECAS/6.png',
        'CANECAS/7.png',
        'CANECAS/8.png',
        'CANECAS/9.png',
        'CANECAS/10.png',
        'CANECAS/11.png',
        'CANECAS/12.png',
      ]
    }),
    new ProdutoListarModel({
      id: 2,
      nome: 'Caneca Acrílica',
      descricao: 'Cores disponíveis branca e rosa.',
      valor: 'R$ 18,00',
      pathImagens:
      [
        'CANECA_ACRILICA/1.jpg',
        'CANECA_ACRILICA/2.jpg',
        'CANECA_ACRILICA/3.jpg',
        'CANECA_ACRILICA/4.jpg',
        'CANECA_ACRILICA/5.jpg',
        'CANECA_ACRILICA/6.jpg',
      ]
    }),
    new ProdutoListarModel({
      id: 3,
      nome: 'Caixinha cabe até 6 docinhos',
      descricao: 'Caixinha vazia.',
      valor: 'R$ 3,50',
      pathImagens:
      [
        'CAIXINHA_PARA_6_DOCINHOS/1.jpg',
        'CAIXINHA_PARA_6_DOCINHOS/2.jpg',
        'CAIXINHA_PARA_6_DOCINHOS/3.jpg',
        'CAIXINHA_PARA_6_DOCINHOS/4.jpg',
        'CAIXINHA_PARA_6_DOCINHOS/5.jpg',
        'CAIXINHA_PARA_6_DOCINHOS/6.jpg',
        'CAIXINHA_PARA_6_DOCINHOS/7.jpg',
        'CAIXINHA_PARA_6_DOCINHOS/8.jpg',
        'CAIXINHA_PARA_6_DOCINHOS/9.jpg',
      ]
    }),
    new ProdutoListarModel({
      id: 4,
      nome: 'Balinhas personalizadas',
      descricao: 'Mínimo 12und',
      valor: 'R$ 0,70 ',
      pathImagens:
      [
        'BALINHAS/1.jpg',
        'BALINHAS/2.jpg',
        'BALINHAS/3.jpg',
      ]
    }),
    new ProdutoListarModel({
      id: 5,
      nome: 'Balinhas personalizadas',
      descricao: '50un.',
      valor: 'R$ 33,00',
      pathImagens:
      [
        'BALINHAS/1.jpg',
        'BALINHAS/2.jpg',
        'BALINHAS/3.jpg',
      ]
    }),
    new ProdutoListarModel({
      id: 6,
      nome: 'Balinhas personalizadas',
      descricao: '100und.',
      valor: 'R$ 55,00',
      pathImagens:
      [
        'BALINHAS/1.jpg',
        'BALINHAS/2.jpg',
        'BALINHAS/3.jpg',
      ]
    }),
    new ProdutoListarModel({
      id: 7,
      nome: 'Card c/balinhas',
      descricao: 'Mínimo 12 und',
      valor: 'R$ 2,10 ',
      pathImagens:
      [
        'CARD_COM_BALINHAS/1.jpg',
        'CARD_COM_BALINHAS/2.jpg',
        'CARD_COM_BALINHAS/3.jpg',
        'CARD_COM_BALINHAS/4.jpg',
      ]
    }),
    new ProdutoListarModel({
      id: 8,
      nome: 'Card c/balinha',
      descricao: '50 und',
      valor: 'R$ 90,00',
      pathImagens:
      [
        'CARD_COM_BALINHAS/1.jpg',
        'CARD_COM_BALINHAS/2.jpg',
        'CARD_COM_BALINHAS/3.jpg',
        'CARD_COM_BALINHAS/4.jpg',
      ]
    }),
    new ProdutoListarModel({
      id: 9,
      nome: 'Card c/balinha ',
      descricao:'100 und',
      valor: 'R$ 150,00',
      pathImagens:
      [
        'CARD_COM_BALINHAS/1.jpg',
        'CARD_COM_BALINHAS/2.jpg',
        'CARD_COM_BALINHAS/3.jpg',
        'CARD_COM_BALINHAS/4.jpg',
      ]
    }),
    new ProdutoListarModel({
      id: 10,
      nome: 'Cards 9x9 cm',
      descricao: 'Mínimo 12 und',
      valor: 'R$ 0,70 ',
      pathImagens:
      [
        'CARDS/1.jpg',
        'CARDS/2.jpg',
        'CARDS/3.jpg',
        'CARDS/4.jpg',
      ]
    }),
    new ProdutoListarModel({
      id: 11,
      nome: 'Tag c/xuxinha',
      descricao: 'Mínimo 12 und',
      valor: 'R$ 2,10',
      pathImagens:
      [
        'TAGS_COM_XUXINHA/1.jpg',
        'TAGS_COM_XUXINHA/2.jpg',
        'TAGS_COM_XUXINHA/3.jpg',
        'TAGS_COM_XUXINHA/4.jpg',
      ]
    }),
    new ProdutoListarModel({
      id: 12,
      nome: 'Bloquinho A7',
      descricao: 'c/100 folhas brancas',
      valor: 'R$ 25,00',
      pathImagens:
      [
        'BLOQUINHO_A7/1.jpg',
        'BLOQUINHO_A7/2.jpg',
        'BLOQUINHO_A7/3.jpg',
        'BLOQUINHO_A7/4.jpg',
        'BLOQUINHO_A7/5.jpg',
      ]
    }),
    new ProdutoListarModel({
      id: 13,
      nome: 'Bloquinho blocado 7x10',
      descricao: 'c/50 folhas',
      valor: 'R$ 4,00',
      pathImagens:
      [
        'BLOQUINHO_BLOCADO_7X10/1.jpg',
        'BLOQUINHO_BLOCADO_7X10/2.jpg',
        'BLOQUINHO_BLOCADO_7X10/3.jpg',
        'BLOQUINHO_BLOCADO_7X10/4.jpg',
      ]
    }),
    new ProdutoListarModel({
      id: 14,
      nome: 'Bloquinho blocado 7x10',
      descricao: 'c/100 folhas',
      valor: 'R$ 7,50',
      pathImagens:
      [
        'BLOQUINHO_BLOCADO_7X10/1.jpg',
        'BLOQUINHO_BLOCADO_7X10/2.jpg',
        'BLOQUINHO_BLOCADO_7X10/3.jpg',
        'BLOQUINHO_BLOCADO_7X10/4.jpg',
      ]
    }),
    new ProdutoListarModel({
      id: 15,
      nome: 'Body Personalizado de manga',
      descricao:'cor branca 100% poliéster',
      valor: 'R$ 28,00',
      pathImagens:
      [
        'BODYS/1.png',
        'BODYS/2.png',
        'BODYS/3.png',
        'BODYS/4.png',
      ]
    }),
    new ProdutoListarModel({
      id: 16,
      nome: 'Camisa Personalizada de manga',
      descricao:'cor branca 100% poliéster',
      valor: 'R$ 38,00',
      pathImagens:
      [
        'CAMISAS/1.png',
        'CAMISAS/2.png',
        'CAMISAS/3.png',
      ]
    }),
    new ProdutoListarModel({
      id: 17,
      nome: 'Sacolinha Mini',
      descricao: 'Sacolinha vazia',
      valor: 'R$ 2,50 ',
      pathImagens:
      [
        'SACOLINHA_MINI/1.jpg',
        'SACOLINHA_MINI/2.jpg',
        'SACOLINHA_MINI/3.jpg',
        'SACOLINHA_MINI/4.jpg',
        'SACOLINHA_MINI/5.jpg',
      ]
    })
  ]
  obterProdutos() {
    return this.produtos;
  }

  obterProdutoPorId(id: number) {
    var produto: ProdutoListarModel = {}
    this.produtos.forEach((item:ProdutoListarModel) => {
      if(item.id == id){
        produto = item
      }
    })
    return produto;
  }
}
