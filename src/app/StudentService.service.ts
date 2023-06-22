import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private http: HttpClient) { }

  API = 'http://localhost:8080';

  public registerStudent(studentData: any) {
    return this.http.post(this.API + '/registrer', studentData);
  }

  public getStudents() {
    return this.http.get(this.API + '/getStudents');
  }

  public deleteStudent(id: any) {
    return this.http.delete(this.API + '/deleteStudent?id=' + id);
  }

  public updateStudents(student: any) {
    return this.http.put(this.API + '/updateStudents', student);
  }
  public updatePassword(student: any) {
    return this.http.put(this.API + '/updatePassword', student);
  }
  public loginStudentFromRemote(student: Student):Observable<any>{
    console.log(student)
   return this.http.post(this.API + '/login', student);
 }


  checkToken(): Observable<any> {
    return this.http.get(`${this.API}/checkToken`);
  }

  public motdepasseoublier(data: any) {
    return this.http.post(this.API + '/oubliermotdepasse ', data);
  }

  public changemotdepasse(data: any) {
    return this.http.post(this.API + '/changemotdepasse', data);
  }


}
