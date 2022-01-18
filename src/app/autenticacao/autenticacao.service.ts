import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(private httpClient: HttpClient) {}

  autenticar(email:string, senha:string):Observable<any>{
    return this.httpClient.post('http://localhost:8080/auth', {
      email: email,
      senha: senha
    })
  }
}
