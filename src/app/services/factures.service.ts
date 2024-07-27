import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Factures } from '../models/factures';
import { Client } from '../models/client';
@Injectable({
  providedIn: 'root'
})
export class FacturesService {

  private clients: Client[] = [];
  private baseURL ="http://localhost:8081/api/v1";

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<Factures[]> {
    return this.http.get<Factures[]>(this.baseURL+'/payment/all');
  }

  public save(facture: Factures): Observable<Factures> {
    return this.http.post<Factures>(this.baseURL+'/payment/add', facture);
  }

}
