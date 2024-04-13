
import { AfterContentInit, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ProdutoListarModel } from 'src/app/core/models/produto.model';
import { HomeService } from '../home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit , AfterViewInit{
  constructor(
    private homeService: HomeService
  ){

  }


  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this.exibirAoScrollar()
  }


  produtos: ProdutoListarModel[] = this.homeService.obterProdutos()
  exibirAoScrollar(){
    const observer = new IntersectionObserver(entries => {
      let toggle = false; 
      Array.from(entries).forEach(entry => {
        if(entry.intersectionRatio >= 0.5) {
          const classe = toggle ? 'init-hidden-off-direita' : 'init-hidden-off-esquerda';
          entry.target.classList.add(classe);
          toggle = !toggle;
        }
      })
    }, { threshold: [0, .5, 1]});

    Array.from(document.querySelectorAll('.init-hidden')).forEach(element => {
      observer.observe(element);
    });
  }

}
