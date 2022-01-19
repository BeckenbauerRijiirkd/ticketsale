import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email = 'teste@teste.com';
  senha = '';

  constructor(private authService: AutenticacaoService, private router:Router) {}

  ngOnInit(): void {}

  login() {
    console.log(this.email);
    console.log(this.senha);

    this.authService.autenticar(this.email, this.senha).subscribe(() => {
      console.log("autenticado com sucesso!");

      this.router.navigate(['cliente']);
      },
        (error) => {
          alert('Email ou senha invalidos');
        }
    );
  }
}