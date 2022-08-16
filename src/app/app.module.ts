import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { Erro404Component } from './erro404/erro404.component';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { usuariosRoutingModule } from './usuarios/usuarios-routing.module.spec';




@NgModule({
  declarations: [
    AppComponent,
    Erro404Component,
    LoginComponent,
    UsuariosComponent,
    UsuarioComponent,
    LayoutComponent,
    HomeComponent,
    



  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TemplateModule,
    RouterModule,

    usuariosRoutingModule,
    AppRoutingModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
