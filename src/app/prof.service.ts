import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfService {
  constructor(private http: HttpClient) { }

  API = 'http://localhost:8080';

public registerProf(profData: any) {
  return this.http.post(this.API + '/registrerProf', profData);
}

public getProf() {
  return this.http.get(this.API + '/getProf');
}

public deleteProf(id: any) {
  return this.http.delete(this.API + '/deleteProf?id=' + id);
}

public updateProf(prof: any) {
  return this.http.put(this.API + '/updateProf', prof);
}

  
}
