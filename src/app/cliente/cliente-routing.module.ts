import { ListaEventosComponent } from './../eventos/lista-eventos/lista-eventos.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente.component';

const routes: Routes = [
  {
    path: '',
    component: ClienteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteRoutingModule {}
