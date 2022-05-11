import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home',
  },
  {
    path:'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)
  },
  {
    path:'eventos',
    loadChildren:()=> import('./eventos/eventos.module').then((m) => m.EventosModule)
  },
  {
    path:'cliente',
    loadChildren:()=> import('./cliente/cliente.module').then((m) => m.ClienteModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
