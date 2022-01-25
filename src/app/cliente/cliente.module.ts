import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { ClienteComponent } from './cliente.component';


@NgModule({
  declarations: [ListaClienteComponent, ClienteComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
