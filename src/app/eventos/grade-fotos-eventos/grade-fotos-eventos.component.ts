import { Component, Input, OnInit } from '@angular/core';
import { Eventos } from '../eventos';

@Component({
  selector: 'app-grade-fotos-eventos',
  templateUrl: './grade-fotos-eventos.component.html',
  styleUrls: ['./grade-fotos-eventos.component.css']
})
export class GradeFotosEventosComponent implements OnInit {

  @Input() eventos!: Eventos;

  constructor() { }

  ngOnInit(): void {
  }

}
