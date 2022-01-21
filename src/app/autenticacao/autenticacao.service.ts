import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';
import { EmailValidator } from '@angular/forms';

export interface Token {
  tipo: string,
  token: string
}
@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(
    private httpClient: HttpClient,
    private usuarioService: UsuarioService,

  ) {}

  autenticar(email: string, senha: string): Observable<HttpResponse<any>> {
    return this.httpClient.post(
      'http://localhost:8080/auth',
      {
        email: email,
        senha: senha,
      },
      { observe: 'response' }
    ).pipe(
      tap((res)=>{
        // const authToken = res.headers.get('x-access-token') ?? '';
        // res.body

        // this.usuarioService.salvaToken(authToken);
      })
    )
  }
}
