import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personnel } from '../models/personnel';

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

  private personnelURL: string;

  constructor(private http: HttpClient) {
    this.personnelURL = "http://localhost:8081/api/v1/employee/all";
  }

  public getAll(): Observable<Personnel[]> {
    return this.http.get<Personnel[]>(this.personnelURL);
  }

  public save(personnel: Personnel): Observable<Personnel> {
    const saveURL = "http://localhost:8081/api/v1/employee/add"; // Change this URL to your actual save endpoint
    return this.http.post<Personnel>(saveURL, personnel);
  }
}
