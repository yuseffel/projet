import { Component } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

import { ToastrService } from 'ngx-toastr';
import { FichierService } from 'src/app/fichier.service';
import { ArchiexamService } from 'src/app/archiexam.service';
@Component({
  selector: 'app-archiexamen',
  templateUrl: './archiexamen.component.html',
  styleUrls: ['./archiexamen.component.css']
})
export class ArchiexamenComponent {

  searchText:any;
  files: any = [];

  constructor(private fileService: ArchiexamService) { }

  ngOnInit(): void {
    this.getFiles();
  }

  getFiles(): void {
    this.fileService.getFiles().subscribe(
      (response: any[]) => {
        response.forEach(element => {
          element.processedImg = 'data:image/jpeg;base64,' + element.data;
          this.files.push(element);
        });
      },
      error => {
        console.error('Error fetching files:', error);
      }
    );
  }

  downloadFile(fileId: number): void {
    this.fileService.downloadFile(fileId).subscribe(response => {
      const fileNameFromUrl = "file";
      if (fileNameFromUrl) {
        const contentType = response.headers && response.headers.get("Content-Type");
        if (contentType) {
          const blob = new Blob([response.body as BlobPart], { type: contentType });

          const link = document.createElement("a");
          link.href = window.URL.createObjectURL(blob);
          link.download = fileNameFromUrl;

          link.click();

          window.URL.revokeObjectURL(link.href);
          link.remove();
        } else {
          console.log("Unable to extract content type");
        }
      } else {
        console.log("Unable to extract file");
      }
    });
  }
}




