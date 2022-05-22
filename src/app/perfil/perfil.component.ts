import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { Usuario } from './../autenticacao/usuario/usuario';
import { Component, OnInit } from '@angular/core';
import { PerfilService } from './perfil.service';
import { Perfil } from './perfil';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  nome = '';
  perfil$!: Observable<Perfil>;
  cpf: '' = "";
  cidade: '' = "";
  uf: '' = "";
  compras: '' = "";


  constructor(private perfilService: PerfilService) {}

  ngOnInit(): void {
    this.perfil$ = this.perfilService.getPerfil(1);

  }
}
