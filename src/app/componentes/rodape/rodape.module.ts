import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RodapeComponent } from './rodape.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [RodapeComponent],
  imports: [CommonModule, RouterModule, MatToolbarModule],
  exports: [RodapeComponent],
})
export class RodapeModule {}
