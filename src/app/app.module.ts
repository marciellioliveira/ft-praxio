import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './paginas/login/login.component';
import { Error404Component } from './paginas/error404/error404.component';
import { CadastroComponent } from './paginas/cadastro/cadastro.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { MenuComponent } from './includes/menu/menu.component';
import { RodapeComponent } from './includes/rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Error404Component,
    CadastroComponent,
    InicioComponent,
    MenuComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
