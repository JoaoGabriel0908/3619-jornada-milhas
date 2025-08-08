import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { QrCode } from '../core/types/type';

@Injectable()
export class PagamentoService {

  private apiUrl: string = environment.apiUrl;

  constructor(
    private httpClient: HttpClient,
  ) {}

  getQrCode(): Observable<QrCode> {
    return this.httpClient.get<QrCode>(`${this.apiUrl}/pagamento/qrcode`);
  }
}
