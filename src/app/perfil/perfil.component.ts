import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PerfilService } from './perfil.service';
import { Perfil } from './perfil';
import { Observable } from 'rxjs';
import { FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  nome = [''];
  perfil$!: Observable<Perfil>;
  cpf = ['']
  cidade = ['']
  uf = ['']
  compras = ['']


  constructor(
    private perfilService: PerfilService,
    private formBuilder: FormBuilder,
    private router: Router
    )
    {}

  ngOnInit(): void {
    this.perfil$ = this.perfilService.getPerfil(1);

  }
}
