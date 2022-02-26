import { MensagemModule } from './../componentes/mensagem/mensagem.module';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';

import { NgxMaskModule } from 'ngx-mask';

import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [HomeComponent, LoginComponent, NovoUsuarioComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MensagemModule,
    NgxMaskModule.forChild(),
    ReactiveFormsModule,
    MatToolbarModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
