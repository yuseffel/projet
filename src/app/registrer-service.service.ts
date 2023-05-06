import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from './registrer';

@Injectable({
  providedIn: 'root'
})
export class RegistrerServiceService {
baseURL="http://localhost:8081/registrer";

  constructor(private httpClient: HttpClient) { }
  addRegister(registrer :Register ){
    console.log(registrer);
  return this.httpClient.post(`${this.baseURL}`,registrer);

  }
}
