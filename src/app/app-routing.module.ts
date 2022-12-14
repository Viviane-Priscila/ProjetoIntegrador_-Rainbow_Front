import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AndamentoComponent } from './andamento/andamento.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { Erro404Component } from './erro404/erro404.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: '', component:LayoutComponent, children:[
    {path:'home', component:HomeComponent},
    {path:'cadastro', component:CadastroComponent},
    {path:'andamento', component:AndamentoComponent},

    {path: '**', component:Erro404Component},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
