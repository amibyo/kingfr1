import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {

  private baseUrl = 'http://localhost:8080/api/v2/maint';

  constructor(private http: HttpClient) { }

  getmaintenance(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createmaintenance(maintenance: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, maintenance);
  }

  updatemaintenance(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deletemaintenance(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getmaintenanceList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
