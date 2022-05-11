import { EventosService } from './../eventos.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Evento } from '../eventos';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe-evento',
  templateUrl: './detalhe-evento.component.html',
  styleUrls: ['./detalhe-evento.component.css']
})
export class DetalheEventoComponent implements OnInit {

  eventoId!: number;
  evento$!: Observable<Evento>;


  constructor(private EventosService:EventosService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.eventoId = this.activatedRoute.snapshot.params.eventoId;
    this.evento$ = this.EventosService.buscarPorId(this.eventoId);
  }

}
