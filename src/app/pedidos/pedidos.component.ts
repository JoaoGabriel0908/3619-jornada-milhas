import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModalCancelarPedidoComponent } from './modal-cancelar-pedido/modal-cancelar-pedido.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Reserva } from '../core/types/type';
import { PedidosService } from './pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent {

  public pedidos$: Observable<Reserva[]> = this.pedidosService.getPedidos();

  constructor(
    private dialog: MatDialog,
    private pedidosService: PedidosService,
  ) { }

  onCancelarPedido(id: number | undefined): void {
    const dialogRef = this.dialog.open(ModalCancelarPedidoComponent, {
      width: '400px',
      data: { id }
    })

    dialogRef.afterClosed().subscribe(id => {
      if (id) {
        this.pedidosService.removerPedido(id)
          .subscribe(() => {
            console.log('Pedido cancelado com sucesso!');
          });
      }
    });

  }
}
