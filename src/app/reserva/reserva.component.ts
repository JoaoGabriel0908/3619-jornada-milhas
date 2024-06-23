import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss']
})
export class ReservaComponent {

  vooRadioOptions = [
    { id: '1', value: 'VOO', label: 'Quero reservar passagens para 3 adultos.' },
    { id: '2', value: 'VOO', label: 'Não quero reservar passagens' }
  ];

  acomodacaoRadioOptions = [
    { id: '1', value: 'ACOMODACAO', label: 'Quero reservar hotel para 3 adultos.' },
    { id: '2', value: 'ACOMODACAO', label: 'Não quero reservar hotel' }
  ];

  carroRadioOptions = [
    { id: '1', value: 'CARRO', label: 'Quero reservar carro.' },
    { id: '2', value: 'CARRO', label: 'Não quero reservar carro' }
  ];

  form = new FormGroup({
    vooRadioSelection: new FormControl(null, Validators.required),
    acomodacaoRadioSelection: new FormControl(null, Validators.required),
    carroRadioSelection: new FormControl(null, Validators.required)
  });
}
