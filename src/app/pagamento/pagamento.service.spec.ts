import { TestBed } from '@angular/core/testing';

import { PagamentoService } from './pagamento.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { QrCode } from '../core/types/type';
import { environment } from 'src/environments/environment';

describe('PagamentoService', () => {
  let service: PagamentoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PagamentoService]
    });

    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(PagamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getQrCode', () => {
    it('deve retornar um Observable<QrCode>', () => {
      const dummyQrCode: QrCode = {
        codigo: 'algum-codigo-qr-string',
        imagem: 'qrcode.png'
      };

      service.getQrCode().subscribe(qrCode => {
        expect(qrCode).toEqual(dummyQrCode);
      });

      const req = httpMock.expectOne(`${environment.apiUrl}/pagamento/qrcode`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyQrCode);
    });
  });
});
