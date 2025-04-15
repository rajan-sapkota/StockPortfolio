import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private apiKey = environment.twelveDataApiKey;
  private baseUrl = 'https://api.twelvedata.com';

  constructor(private http: HttpClient) {}

  getStockPrice(symbol: string): Observable<any> {
    const url = `${this.baseUrl}/price?symbol=${symbol}&apikey=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}
