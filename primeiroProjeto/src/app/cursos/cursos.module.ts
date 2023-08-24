import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursosDetalheComponent } from './cursos-detalhe/cursos-detalhe.component';



@NgModule({
  declarations: [
    CursosComponent,
    CursosDetalheComponent //como nao esta no export ele fica privado a somente este modulo.
  ],
  imports: [
    CommonModule
  ],
  exports: [ //exportar o component para fora do modulo.
    CursosComponent
  ]
})
export class CursosModule { }
