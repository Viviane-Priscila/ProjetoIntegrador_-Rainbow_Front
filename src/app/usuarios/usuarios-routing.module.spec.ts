import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuariosComponent } from './usuarios.component';

const routes: Routes = [
  {path: 'usuarios', component:LayoutComponent, children:[
    {path:'usuario', component:UsuariosComponent},
    {path:'usuario/:id', component:UsuariosComponent},
    {path:'', redirectTo: 'usuaria/lista', pathMatch: 'full'}
  
]}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class usuariosRoutingModule { }