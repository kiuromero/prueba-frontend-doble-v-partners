import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { UsuarioLista } from '../models/usuario-lista';
import { Observable } from 'rxjs';
import { Response } from 'src/app/core/models/api/response';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<Response<UsuarioLista>> {    
    return this.http.get<Response<UsuarioLista>>(environment.apiUrl);
  }
}
