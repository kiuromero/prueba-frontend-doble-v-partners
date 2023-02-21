import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { HomeModule } from '../home/home.module';
import { ListaUsuarioComponent } from './components/lista-usuarios/lista-usuario.component';


@NgModule({
  declarations: [ListaUsuarioComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    HomeModule
  ],
  exports : [ListaUsuarioComponent]
})
export class UsuariosModule { }
