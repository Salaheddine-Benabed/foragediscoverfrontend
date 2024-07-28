import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseURL = "http://localhost:8081/api/v1";

  constructor(private http: HttpClient) { }

  public fetchClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseURL + '/client/all');
  }

  public save(client: Client): Observable<Client> {
    return this.http.post<Client>(this.baseURL + '/client/add', client);
  }

  public update(client: Client): Observable<Client> {
    return this.http.put<Client>(this.baseURL + '/client/' + client.clientId, client);
  }

  public delete(clientId: number): Observable<void> {
    return this.http.delete<void>(this.baseURL + '/client/' + clientId);
  }

  public getClientById(clientId: number): Observable<Client> {
    return this.http.get<Client>(this.baseURL + '/client/' + clientId);
  }

}
