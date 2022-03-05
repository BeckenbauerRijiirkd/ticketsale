import { CartaoModule } from './../componentes/cartao/cartao.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosRoutingModule } from './eventos-routing.module';
import { EventoComponent } from './evento/evento.component';
import { GradeFotosEventosComponent } from './grade-fotos-eventos/grade-fotos-eventos.component';
import { ListaEventosComponent } from './lista-eventos/lista-eventos.component';
import { NavComponent } from '../componentes/nav/nav.component';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [EventoComponent, GradeFotosEventosComponent, ListaEventosComponent, NavComponent],
  imports: [CommonModule, EventosRoutingModule, CartaoModule, MatListModule, MatSidenavModule],
})
export class EventosModule {}
