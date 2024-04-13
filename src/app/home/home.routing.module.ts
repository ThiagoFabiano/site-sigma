import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Listar/home.component';
import { VisualizarProdutoComponent } from './Visualizar/visualizar-produto.component';

export const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path:'Visualizar/:id/:foto_ativa',
        component: VisualizarProdutoComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
