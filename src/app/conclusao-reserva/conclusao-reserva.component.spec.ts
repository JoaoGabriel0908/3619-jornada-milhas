import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConclusaoReservaComponent } from './conclusao-reserva.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ConclusaoReservaComponent', () => {
  let component: ConclusaoReservaComponent;
  let fixture: ComponentFixture<ConclusaoReservaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule, // Ensure HttpClientTestingModule is imported if needed
      ],
      declarations: [ConclusaoReservaComponent]
    });
    fixture = TestBed.createComponent(ConclusaoReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve exibir o titulo "Reserva concluída com sucesso."', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1.confirmation-title').textContent).toContain('Reserva concluída com sucesso.')
  })

  it('deveria renderizar o conteúdo baseado nas propriedades alt e src', () => {
    const compiled = fixture.nativeElement;
    const imgElement = compiled.querySelector('.confirmation-image');
    imgElement.src = '../../assets/imagens/conclusao-reserva.png';
    imgElement.alt = 'Reservation confirmed illustration';

    expect(fixture.nativeElement).toMatchSnapshot();
  })
});
