import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Factures } from '../models/factures';
@Injectable({
  providedIn: 'root'
})
export class FacturesService {


  private baseURL ="http://localhost:8081/api/v1/payment";

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<Factures[]> {
    return this.http.get<Factures[]>(this.baseURL+'/all');
  }

  public save(stock: Factures): Observable<Factures> {
    return this.http.post<Factures>(this.baseURL+'/add', Factures);
  }
}
