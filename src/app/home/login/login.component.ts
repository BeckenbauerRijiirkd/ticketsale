import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email = 'teste@teste.com';
  senha = '123456';

  constructor(
    private authService: AutenticacaoService,
    private router: Router,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {}

  login() {


    this.authService.autenticar(this.email, this.senha).subscribe(
      (data) => {
        console.log('autenticado com sucesso!');
        console.log(data.body.token);

        this.usuarioService.salvaToken(data.body.token);

        this.router.navigate(['eventos']);
      },
      (error) => {
        alert('Email ou senha invalidos');
      }
    );
  }
}
