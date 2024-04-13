import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home.routing.module';
import { CoreModule } from '../core/core.module';
import { HomeComponent } from './Listar/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { NgxMaskModule } from 'ngx-mask';
import { VisualizarProdutoComponent } from './Visualizar/visualizar-produto.component';
@NgModule({
    exports: [

    ],
    declarations: [
      HomeComponent,
      VisualizarProdutoComponent,
    ],
    imports: [
      CommonModule,
      HomeRoutingModule,
      CoreModule,
      ReactiveFormsModule,
      NgxMaskModule.forRoot(),

    ]
})
export class HomeModule { }
