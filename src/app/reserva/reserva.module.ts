import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaComponent } from './reserva.component';
import { SharedModule } from '@shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ReservaComponent
  ],
  imports: [
    ReactiveFormsModule,
    SharedModule,
    CommonModule
  ]
})
export class ReservaModule { }
