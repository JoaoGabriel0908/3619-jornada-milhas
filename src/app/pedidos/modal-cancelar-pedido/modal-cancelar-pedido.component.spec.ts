import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCancelarPedidoComponent } from './modal-cancelar-pedido.component';

describe('ModalCancelarPedidoComponent', () => {
  let component: ModalCancelarPedidoComponent;
  let fixture: ComponentFixture<ModalCancelarPedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCancelarPedidoComponent]
    });
    fixture = TestBed.createComponent(ModalCancelarPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
