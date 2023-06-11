import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  API = 'http://localhost:8080';

  public registerContact(contactData: any) {
    return this.http.post(this.API + '/registerContact', contactData);
  }

  public getContact() {
    return this.http.get(this.API + '/getContact');
  }

  public deleteContact(id: any) {
    return this.http.delete(this.API + '/deleteContact?id=' + id);
  }

}
