
import { Injectable } from '@angular/core';
import * as finnhub from 'finnhub';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private apiKey = 'cvvg0r9r01qi0bq52sfgcvvg0r9r01qi0bq52sg0';

  private finnhubClient = finnhub.Client({
    apiKey: this.apiKey
  });

  constructor() {}

  getCompanyProfile(symbol: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.finnhubClient.companyProfile2({ symbol }, (error: any, data: any, response: any) => {
        if (error) reject(error);
        else resolve(data);
      });
    });
  }

  getQuote(symbol: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.finnhubClient.quote(symbol, (error: any, data: any, response: any) => {
        if (error) reject(error);
        else resolve(data);
      });
    });
  }
}
