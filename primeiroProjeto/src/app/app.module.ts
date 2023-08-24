import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro02Component } from './meu-primeiro02/meu-primeiro02.component';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  declarations: [//componentes, diretivas, pipes.
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro02Component
  ],
  imports: [ //outros modulos para este modulo ou para outros modulos.
    BrowserModule,
    AppRoutingModule,
    CursosModule
  ],
  providers: [], //servicos que ficara disponivel para outros modulos.
  bootstrap: [AppComponent] // somente para o modulo raiz, que sera iniciado como container.
})
export class AppModule { }
