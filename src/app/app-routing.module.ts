import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Erro404Component } from './erro404/erro404.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: '', component:LayoutComponent, children:[
    {path:'home', component:HomeComponent},
    {path:'usuario', component:UsuarioComponent},
    {path: '**', component:Erro404Component},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
