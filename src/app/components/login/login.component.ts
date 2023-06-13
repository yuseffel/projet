import { DialogConfig } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentService } from 'src/app/StudentService.service';
import { Student } from 'src/app/student';
import { MPOublierComponent } from '../mpoublier/mpoublier.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   student: Student = new Student();
   loginEF!: FormGroup;

  constructor(private studentService :StudentService, private toastr:ToastrService, private router:Router,private dialog:MatDialog,private formBuilder: FormBuilder){}

  ngOnInit() {
    this.loginEF = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      motdepasse: ['', Validators.required],
  })
}

  loginStudent(){
    console.log(this.student);
    this.studentService.loginStudentFromRemote(this.student).subscribe(
      (resp) => {
        console.log(resp);
        this.toastr.success("Connectée avec succés");
        this.router.navigate(['/choixFilieres'])
      },
      (err) => {
        console.log(err);
        this.toastr.error("Erreur dans votre connexion. Veuillez réessayer");
      }
    );
  }
  handleForgetPasswordAction(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "550px";
    this.dialog.open(MPOublierComponent,dialogConfig);
  }
   
  }