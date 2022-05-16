import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { NovoUsuario } from './novo-usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endereco } from './endereco';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  constructor(private http: HttpClient) {}

  cadastrarNovoUsuario(novoUsuario: NovoUsuario) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    return this.http.post(`${API}/clientes`, novoUsuario, { headers: headers });
  }

  verificarCep(cep: String): Observable<Endereco> {
    return this.http.get<Endereco>(`https://viacep.com.br/ws/${cep}/json/`);
  }
}
