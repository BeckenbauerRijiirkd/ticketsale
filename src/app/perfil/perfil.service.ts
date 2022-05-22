import { Usuario } from './../autenticacao/usuario/usuario';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Perfil } from './perfil';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class PerfilService {
  
  // user$ = this.usuarioService.retornaUsuario()

  constructor(
    private http: HttpClient
  ) {}

  getPerfil(id: number): Observable<Perfil> {
    return this.http.get<Perfil>(`${API}/clientes/${id}`);
  }
}
