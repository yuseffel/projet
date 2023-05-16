import { Component } from '@angular/core';
import { StudentService } from '../../Student.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tableau' ,
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css'],
  providers:[StudentService]
})
export class TableauComponent {
  title = 'studentdashboard';

  studentDetails = null as any;
  studentToUpdate = {
    nom :"",
    prenom :"",
    num :"",
    email :"",
    motdepasse :"",
    cfmotpasse :"",
  }

  constructor(private studentService: StudentService , private toastr:ToastrService) {
    this.getStudentsDetails();
  }

  register(registerForm: NgForm) {
    this.studentService.registerStudent(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        this.getStudentsDetails();
        this.toastr.success("Votre inscription est bien enregistré");
      },
      (err) => {
        console.log(err);
        this.toastr.error("Erreur dans votre inscription. Veuillez réessayer");
      }
    );
  }

  getStudentsDetails() {
    this.studentService.getStudents().subscribe(
      (resp) => {
        console.log(resp);
        this.studentDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }


  deleteStudent(student: any) {
    this.studentService.deleteStudent(student.num).subscribe(
      (resp) => {
        console.log(resp);
        this.getStudentsDetails();
        this.toastr.success("Etudiant est bien supprimé");
      },
      (err) => {
        console.log(err);
        this.toastr.error("Etudiant n'est pas supprimé");
      }
    );
  }

  edit(studuent: any){
    this.studentToUpdate = studuent;
  }

  updateStudent(){
    this.studentService.updateStudents(this.studentToUpdate).subscribe(
      (resp) => {
        console.log(resp);
        this.toastr.success("Modifier avec succee");
      },
      (err) => {
        console.log(err);
        this.toastr.error("Erreur lors de modification");
        
      }
    );

  }


}
