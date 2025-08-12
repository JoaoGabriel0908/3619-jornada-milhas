import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConclusaoReservaComponent } from './conclusao-reserva.component';

describe('ConclusaoReservaComponent', () => {
  let component: ConclusaoReservaComponent;
  let fixture: ComponentFixture<ConclusaoReservaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConclusaoReservaComponent]
    });
    fixture = TestBed.createComponent(ConclusaoReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
