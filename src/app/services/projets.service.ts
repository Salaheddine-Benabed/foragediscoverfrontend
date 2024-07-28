import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projets } from '../models/projets';

@Injectable({
  providedIn: 'root'
})
export class ProjetsService {

  private baseURL = "http://localhost:8081/api/v1/project";

  constructor(private http: HttpClient) {}

  public getAll(): Observable<Projets[]> {
    return this.http.get<Projets[]>(`${this.baseURL}/all`);
  }

  public save(projets: Projets): Observable<Projets> {
    return this.http.post<Projets>(`${this.baseURL}/add`, projets);
  }
  

  public update(project: Projets): Observable<Projets> {
    console.log('data in service : ', project);
    return this.http.put<Projets>(`${this.baseURL}/${project.projectId}`, project);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseURL}/${id}`);
  }
}
