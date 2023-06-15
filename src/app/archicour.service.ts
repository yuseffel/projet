import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArchicourService {

  private apiUrl = 'http://localhost:8080/archicour';

  constructor(private http: HttpClient) { }

  uploadFile(file: File): Observable<number> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    return this.http.post(this.apiUrl + '/uploadArchicour', formData, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      map(event => this.getUploadProgress(event)),
    );
  }

  private getUploadProgress(event: any): number {
    if (event.type === HttpEventType.UploadProgress) {
      const percentDone = Math.round((event.loaded / event.total) * 100);
      return percentDone;
    }
    return 0;
  }

  getFiles(): Observable<any> {
    return this.http.get<File[]>(this.apiUrl + '/Archicour');
  }


  downloadFile(fileId: number): Observable<HttpResponse<Blob>> {
    return this.http.get(this.apiUrl + `/downloadArchicour/${fileId}`, {
      responseType: 'blob',
      observe: 'response',
    });
  }

  public deleteFile(id: any) {
    return this.http.delete(this.apiUrl + '/deleteArchicour?id=' + id);
  }

  public getFile() {
    return this.http.get(this.apiUrl+ '/getArchicour');
  }


}



