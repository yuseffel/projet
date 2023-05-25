import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentService } from 'src/app/StudentService.service';
import { Student } from 'src/app/student';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   student: Student = new Student();

  constructor(private studentService :StudentService, private toastr:ToastrService, private router:Router){}

  ngOnInit(): void {  
  }

  loginStudent(){
    console.log(this.student);
    this.studentService.loginStudentFromRemote(this.student).subscribe(
      (resp) => {
        console.log(resp);
        this.toastr.success("Connectée avec succes");
        this.router.navigate(['/cfilieres'])
      },
      (err) => {
        console.log(err);
        this.toastr.error("Erreur dans votre connexion. Veuillez réessayer");
      }
    );
  }
   
  }
  
    



