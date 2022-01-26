import { CartaoModule } from './../componentes/cartao/cartao.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosRoutingModule } from './eventos-routing.module';
import { EventoComponent } from './evento/evento.component';
import { GradeFotosEventosComponent } from './grade-fotos-eventos/grade-fotos-eventos.component';
import { ListaEventosComponent } from './lista-eventos/lista-eventos.component';

@NgModule({
  declarations: [EventoComponent, GradeFotosEventosComponent, ListaEventosComponent],
  imports: [CommonModule, EventosRoutingModule, CartaoModule],
})
export class EventosModule {}
