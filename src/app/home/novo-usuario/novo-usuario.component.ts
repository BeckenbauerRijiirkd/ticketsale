import { ConsultaCepService } from './../../util/consulta-cep.service';
import { Router } from '@angular/router';
import { NovoUsuarioService } from './novo-usuario.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { NovoUsuario } from './novo-usuario';
import { Observable } from 'rxjs';
import { first, map, switchMap } from 'rxjs/operators';
import { Endereco } from 'src/app/util/endereco';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup;

  endereco$!: Observable<Endereco>;

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
    private consultaCepService: ConsultaCepService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      nome: [''],
      dataNascimento: [''],
      cpf: [''],
      cep: ['', [], [this.validarCep()]],
      cidade: [''],
      uf: [''],
      email: [''],
      userName: [''],
      senha: [''],
    });
  }
  cadastrar() {
    if (this.novoUsuarioForm.valid) {
      const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
      console.log(novoUsuario);

      this.novoUsuarioService.cadastrarNovoUsuario(novoUsuario).subscribe(
        () => {
          alert('Usuario Criado Com Sucesso');
          this.router.navigate(['']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  validarCep() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((cep) => this.consultaCepService.verificarCep(cep)),
        map(
          (result) => (
            this.novoUsuarioForm.get('cidade')?.setValue(result.localidade),
            this.novoUsuarioForm.get('uf')?.setValue(result.uf)
          )
        ),
        first()
      );
    };
  }
}
