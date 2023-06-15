import { Component } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';

import { FichierService } from 'src/app/fichier.service';
import { saveAs } from 'file-saver';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ArchiexamService } from 'src/app/archiexam.service';
@Component({
  selector: 'app-archiexamenp',
  templateUrl: './archiexamenp.component.html',
  styleUrls: ['./archiexamenp.component.css']
})
export class ArchiexamenpComponent {
  searchText:any;
  selectedFile: File | null = null;
  uploadProgress!: number;
  fileDetails = null as any;

  constructor(private fileUploadService: ArchiexamService, private toastr:ToastrService ,private fileService: ArchiexamService) { }

  onFileSelected(event: any): void {
    const fileList: FileList = event.target.files;
    if (fileList && fileList.length > 0) {
      this.selectedFile = fileList[0];
    }
  }

  uploadFile(): void {
    if (this.selectedFile) {
      this.fileUploadService.uploadFile(this.selectedFile)
        .subscribe(progress => {
          this.uploadProgress = progress;
          if (progress === 100) {
            this.toastr.success("Ajouter avec succés");
            // File upload completed
            this.selectedFile = null;
          }
        });
    }
  }
  files: any = [];



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

  deleteFile() {
    this.fileService.deleteFile(this.fileDetails.id).subscribe(
      (resp) => {
        console.log(resp);
        this.getFileDetails();
        this.toastr.success("Effacé avec succés");
      },
      (err) => {
        console.log(err);
        this.toastr.error("Erreur de suppression");
      }
    );
  }

  supp(file:any){
    this.fileDetails=file;
  }

  getFileDetails() {
    this.fileService.getFile().subscribe(
      (resp) => {
        console.log(resp);
        this.fileDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}



