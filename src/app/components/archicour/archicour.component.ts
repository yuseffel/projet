import { Component } from '@angular/core';
import { error } from 'jquery';
import { ArchicourService } from 'src/app/archicour.service';
import { FichierService } from 'src/app/fichier.service';

@Component({
  selector: 'app-archicour',
  templateUrl: './archicour.component.html',
  styleUrls: ['./archicour.component.css']
})
export class ArchicourComponent {
  searchText:any;
  files: any = [];

  constructor(private fileService: ArchicourService) { }

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
      error=> {
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


