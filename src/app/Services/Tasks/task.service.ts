import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseComponent } from '../../base/base.component';

@Injectable({
  providedIn: 'root'
})
export class TaskService extends BaseComponent {

  API_URL = this.getBaseUrl();

  constructor(
    private http: HttpClient
  ) { 
    super();
  }

  GetlAll(): Observable<any> {
    return this.http.get(`${this.API_URL}/Task`);
  }

  GetById(id : number): Observable<any> {
    return this.http.get(`${this.API_URL}/Task/${id}`);
  }


  Create(taskData : any): Observable<any> {
    return this.http.post(`${this.API_URL}/Task`,taskData);
  }

  Delete(id : number): Observable<any> {
    return this.http.delete(`${this.API_URL}/Task/${id}`);
  }
  Update(taskData : any): Observable<any> {
    return this.http.put(`${this.API_URL}/Task/${taskData.id}`,taskData);
  }

}
