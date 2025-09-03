import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from '../core/types/type';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  private apiUrl: string = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  getPedidos(): Observable<Reserva[]> {
    return this.httpClient.get<Reserva[]>(`${this.apiUrl}/reserva/pedidos`);
  }

  removerPedido(id: number): Observable<Reserva[]> {
    return this.httpClient.delete<Reserva[]>(`${this.apiUrl}/reserva/pedidos/${id}`);
  }
}
