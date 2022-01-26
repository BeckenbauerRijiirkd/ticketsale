import { TokenService } from './../autenticacao/token.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Eventos } from './eventos';

const API = `http://localhost:8080`;
@Injectable({
  providedIn: 'root',
})
export class EventosService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  listaDeEventos(): Observable<Eventos> {
    const token = this.tokenService.retornaToken();
    const headers = new HttpHeaders().append('x-access-token', token);
    return this.http.get<Eventos>(`${API}/eventos`, {
      headers,
    });
  }
}
