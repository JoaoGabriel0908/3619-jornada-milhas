import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ModalCancelarPedidoComponent } from './modal-cancelar-pedido/modal-cancelar-pedido.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent {

  public pedidos$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([
    {
      id: 1,
      origem: 'Deserto do Atacama, Chile',
      dataIda: '23/09/2025',
      quantidadePessoas: 2,
      dataVolta: '30/09/2025',
      adultos: 2,
      valorFinal: 5000
    }
  ]);

  constructor(
    private dialog: MatDialog,
  ) { }

  onCancelarPedido(id: number): void {
    const dialogRef = this.dialog.open(ModalCancelarPedidoComponent, {
      width: '400px',
      // data: { pedidoId: id }
    })
  }

}
