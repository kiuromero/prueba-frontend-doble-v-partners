import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';

const routes: Routes = [  
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'usuarios',
        loadChildren: () => import('./usuarios/usuarios.module')
          .then(m => m.UsuariosModule),
      }
    ]

  },
  {
    path: '**',
    loadChildren: () => import('./usuarios/usuarios.module')
      .then(m => m.UsuariosModule),
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
