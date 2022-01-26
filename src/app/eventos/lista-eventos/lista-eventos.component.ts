import { EventosService } from './../eventos.service';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Eventos } from '../eventos';

@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styleUrls: ['./lista-eventos.component.css'],
})
export class ListaEventosComponent implements OnInit {
  eventos!: Eventos;

  constructor(
    private usuarioService: UsuarioService,
    private eventoService: EventosService
  ) {}

  ngOnInit(): void {
    this.usuarioService.retornaUsuario().subscribe((usuario)=>{
      const username = usuario.name ?? '';
      this.eventoService.listaDeEventos().subscribe((eventos) => {
        this.eventos = eventos
      })
    })
  }
}
