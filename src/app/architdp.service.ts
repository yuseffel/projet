import { Injectable } from '@angular/core';

import { HttpClient, HttpEventType, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArchitdpService {

  
  private apiUrl = 'http://localhost:8080/architdp';

  constructor(private http: HttpClient) { }

  uploadFile(file: File): Observable<number> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    return this.http.post(this.apiUrl + '/uploadArchitdp', formData, {
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
    return this.http.get<File[]>(this.apiUrl + '/Architdp');
  }


  downloadFile(fileId: number): Observable<HttpResponse<Blob>> {
    return this.http.get(this.apiUrl + `/downloadArchitdp/${fileId}`, {
      responseType: 'blob',
      observe: 'response',
    });
  }

  public deleteFile(id: any) {
    return this.http.delete(this.apiUrl + '/deleteArchitdp?id=' + id);
  }

  public getFile() {
    return this.http.get(this.apiUrl+ '/getArchitdp');
  }


}


