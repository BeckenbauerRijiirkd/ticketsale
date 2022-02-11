import { Router } from '@angular/router';
import { NovoUsuarioService } from './novo-usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovoUsuario } from './novo-usuario';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      nome:[''],
      dataNascimento:[''],
      cpf:[''],
      cidade:[''],
      uf:[''],
      email:[''],
      userName:[''],
      senha:[''],
    });
  }
  cadastrar() {
    if (this.novoUsuarioForm.valid) {
      const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
      console.log(novoUsuario);

      this.novoUsuarioService.cadastrarNovoUsuario(novoUsuario).subscribe(
        () => {
          alert("Usuario Criado Com Sucesso")
          this.router.navigate(['']);
        },
        (error) => {

          console.log(error);

        }
      );
    }
  }
}
