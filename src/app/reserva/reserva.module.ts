import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { ReservaComponent } from './reserva.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ReservaComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ReservaModule { }
