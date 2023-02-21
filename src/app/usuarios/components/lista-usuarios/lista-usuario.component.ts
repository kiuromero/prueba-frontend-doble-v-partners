import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { UsuarioLista } from '../../models/usuario-lista';
import { Response } from 'src/app/core/models/api/response';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  usuariosList : UsuarioLista [] = [];
  constructor(private _usuarioService: UsuariosService) {
    this.getAllUsers();
   }

  ngOnInit(): void {
  }

  getAllUsers() {
    this._usuarioService.getAllUsers().subscribe
      ((response: Response<UsuarioLista>) => {  
        this.usuariosList = response.items
      },
      (err) => {
      }
    );
  }


}
