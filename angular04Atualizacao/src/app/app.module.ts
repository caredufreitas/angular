import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgIfMelhoradoComponent } from './ng-if-melhorado/ng-if-melhorado.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIfMelhoradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
