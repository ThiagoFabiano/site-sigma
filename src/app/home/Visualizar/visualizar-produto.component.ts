import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoListarModel } from 'src/app/core/models/produto.model';

@Component({
  selector: 'app-visualizar-produto',
  templateUrl: './visualizar-produto.component.html',
  styleUrls: ['./visualizar-produto.component.css'],
})
export class VisualizarProdutoComponent implements OnInit {
  constructor(
    private homeService: HomeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}
  id: number = this.activatedRoute.snapshot.params['id']
  fotoAtiva: number = this.activatedRoute.snapshot.params['foto_ativa']
  produto: ProdutoListarModel | null  = {}
  linkWhatsapp =''
  ngOnInit(): void {
    this.buscarProdutoPorId(this.id)
    console.log(this.activatedRoute)
  }

  buscarProdutoPorId(id:number){
    this.produto = this.homeService.obterProdutoPorId(this.id)
    this.linkWhatsapp = `https://wa.me/555527997778907?text=Olá!%20Tenho%20interesse%20no%20produto%20${this.produto ? this.produto.nome : ''}%0Dhttps://www.rdstation.com/blog/marketing/criar-link-do-whatsapp/`
  }

  voltar(){
    console.log('teste')
    this.router.navigate(['Home'])
  }

}
