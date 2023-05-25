import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService{

  constructor(private http: HttpClient) { }

  API = 'http://localhost:8080';


public loginAdminFromRemote(admin: Admin):Observable<any>{
  console.log(admin)
 return this.http.post(this.API + '/logina', admin);
}
}
