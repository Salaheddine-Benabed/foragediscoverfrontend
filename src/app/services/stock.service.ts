import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from '../models/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private baseURL ="http://localhost:8081/api/v1/stockItem";

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<Stock[]> {
    return this.http.get<Stock[]>(this.baseURL+'/all');
  }

  public save(stock: Stock): Observable<Stock> {
    return this.http.post<Stock>(this.baseURL+'/add', Stock);
  }
}