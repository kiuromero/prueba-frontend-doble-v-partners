import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaUsuarioComponent } from './components/lista-usuarios/lista-usuario.component';

const routes: Routes = [{
  path: 'lista',
  component: ListaUsuarioComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class UsuariosRoutingModule { }
