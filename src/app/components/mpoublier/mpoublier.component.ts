import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { StudentService } from 'src/app/StudentService.service';
import { NgxUiLoaderService } from 'ngx-ui-loader'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mpoublier',
  templateUrl: './mpoublier.component.html',
  styleUrls: ['./mpoublier.component.css']
})
export class MPOublierComponent implements OnInit {
  motdepasseoublierForm:any = FormGroup;
  responseMessage:any;

  constructor(private formBuilder:FormBuilder,private studentService :StudentService,private ngxService:NgxUiLoaderService,private toastr:ToastrService){}

  ngOnInit(): void {
    this.motdepasseoublierForm = this.formBuilder.group({
      email:[null,[Validators.required,Validators.email]]
    })     
  }
  handleSubmit(){
    this.ngxService.start();
    var formData = this.motdepasseoublierForm.value;
    var data = {
      email: formData.email
    } 
    this.studentService.motdepasseoublier(data).subscribe((response:any)=>{
      this.ngxService.stop();
      this.responseMessage = response?.message;
    },(error)=>{
      this.ngxService.stop();
      if(error.error?.message){
        this.responseMessage = error.error?.message;
        this.toastr.error("Erreur d'envoyer le message");
      }
      else{
          this.responseMessage = "Error";
          this.toastr.success("Message envoyer avec succés");
          
      }

    })
  }
}

