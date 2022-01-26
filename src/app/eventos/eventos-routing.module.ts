import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaEventosComponent } from './lista-eventos/lista-eventos.component';

const routes: Routes = [
  {
    path: '',
    component: ListaEventosComponent,
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventosRoutingModule { }
