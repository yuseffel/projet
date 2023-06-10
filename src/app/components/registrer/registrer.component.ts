import { Component} from '@angular/core';
import { StudentService } from 'src/app/StudentService.service';
import { AbstractControl, FormBuilder, FormGroup, NgForm, ValidationErrors, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Student } from 'src/app/student';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-registrer',
  templateUrl: './registrer.component.html',
  styleUrls: ['./registrer.component.css'],
  
})
export class RegistrerComponent  {
  title = 'studentdashboard';
 
  students! : Student;
  registerF !: FormGroup;
  studentDetails = null as any;
  studentToUpdate = {
    nom :"",
    prenom :"",
    num :"",
    email :"",
    motdepasse :"",
    cfmotpasse :"",
  }

  constructor(private studentService: StudentService, private toastr:ToastrService, private formBuilder:FormBuilder) {
    this.getStudentsDetails();
  }
    ngOnInit(){
      this.registerF = this.formBuilder.group({
        nom :['',Validators.required],
        prenom : ['',Validators.required],
        num : ['',Validators.compose([Validators.required,Validators.minLength(6)])],
        email :['',Validators.compose([Validators.required,Validators.email])],
        motdepasse :['',Validators.required],
        cfmotpasse : ['',Validators.required],
  
      })
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
    this.studentService.deleteStudent(student.rollNumber).subscribe(
      (resp) => {
        console.log(resp);
        this.getStudentsDetails();
        
      },
      (err) => {
        console.log(err);
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
      },
      (err) => {
        console.log(err);
      }
    );
  }



}
   /*export function isTenAsync(control: AbstractControl): 
  Observable<ValidationErrors | null> {
    const v: number = control.value;
    if (v !== 10) {
    // Emit an object with a validation error.
      return of({ 'notTen': true, 'requiredValue': 10 });
    }
    // Emit null, to indicate no error occurred.
    return of(null);
  }*/




