import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient) { }
getData(): Observable<any>{
  const url="https://api.spaceXdata.com/v3/launches?limit=20";
  return this.http.get<any>(url)
}

}