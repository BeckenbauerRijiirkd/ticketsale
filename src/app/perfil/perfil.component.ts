import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { Usuario } from './../autenticacao/usuario/usuario';
import { Component, OnInit } from '@angular/core';
import { PerfilService } from './perfil.service';
import { Perfil } from './perfil';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  perfil$!: Observable<Perfil>;
  alterarUsuarioForm!: FormGroup;
  perf!: Perfil;

  constructor(
    private formBuilder: FormBuilder,
    private perfilService: PerfilService
  ) {}

  ngOnInit(): void {
    this.alterarUsuarioForm = this.formBuilder.group({
      nome: [''],
      cpf: [''],
      cep: [''],
      cidade: [''],
      uf: [''],
      email: [''],
    });

    this.perfil$ = this.perfilService.getPerfil(1);
  }

  alterar() {
    console.log(this.alterarUsuarioForm);

    this.perf = this.alterarUsuarioForm.value;
    this.perfilService.putPerfil(1, this.perf).subscribe(
      () => {
        alert('Atualizado');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
