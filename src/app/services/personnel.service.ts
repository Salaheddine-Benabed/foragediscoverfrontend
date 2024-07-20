import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personnel } from '../models/personnel';

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {
  private baseURL: string = "http://localhost:8081/api/v1/employee";

  constructor(private http: HttpClient) {}

  public getAll(): Observable<Personnel[]> {
    return this.http.get<Personnel[]>(`${this.baseURL}/all`);
  }

  public add(personnel: Personnel): Observable<Personnel> {
    return this.http.post<Personnel>(`${this.baseURL}/add`, personnel);
  }

  public update(personnel: Personnel): Observable<Personnel> {
    console.log('data in service : ',personnel);
    return this.http.put<Personnel>(`${this.baseURL}/update/${personnel.id}`, personnel);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseURL}/delete/${id}`);
  }
}
