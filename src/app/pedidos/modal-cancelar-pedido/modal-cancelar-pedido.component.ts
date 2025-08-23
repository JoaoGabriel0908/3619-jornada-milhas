import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-cancelar-pedido',
  templateUrl: './modal-cancelar-pedido.component.html',
  styleUrls: ['./modal-cancelar-pedido.component.scss']
})
export class ModalCancelarPedidoComponent {

    constructor(
    private dialogRef: MatDialogRef<ModalCancelarPedidoComponent>,
  ) {}

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
