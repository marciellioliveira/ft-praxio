import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { CadastroComponent } from './paginas/cadastro/cadastro.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { Error404Component } from './paginas/error404/error404.component';

const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'cadastro', component: CadastroComponent },
	{ path: 'inicio', component: InicioComponent },
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
