import { Component, OnInit} from '@angular/core';
import { StudentService } from 'src/app/StudentService.service';
import { AbstractControl, FormBuilder, FormGroup, NgForm, ValidationErrors, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registrer',
  templateUrl: './registrer.component.html',
  styleUrls: ['./registrer.component.css'],
  
})
export class RegistrerComponent implements OnInit {
  title = 'studentdashboard';
  registerForm !: FormGroup;
  studentDetails = null as any;
  submitted = false;
  cfmotdepasse !:any;


  constructor(private studentService: StudentService, private toastr:ToastrService, private formBuilder:FormBuilder) {
   
  }
    ngOnInit(){
      this.registerForm = this.formBuilder.group({
        nom :['',Validators.required],
        prenom : ['',Validators.required],
        num : ['',Validators.compose([Validators.required,Validators.minLength(6)])],
        email :['',Validators.compose([Validators.required,Validators.email,Validators.pattern(/^[a-zA-Z0-9._%+-]+@\etu\.uae\.ac\.ma$/)])],
        motdepasse :['',Validators.compose([Validators.required,Validators.minLength(6)])],
        cfmotpasse :['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
    }, {
        validators: MustMatch('motdepasse', 'cfmotdepasse')
      })
    }

    get f() { return this.registerForm.controls; }

 register() { 
    this.submitted = true;
    this.studentService.registerStudent(this.registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        this.registerForm.reset();
        this.getStudentsDetails();
        this.toastr.success("Votre inscription est bien enregistré");
      },
      (err) => {
        console.log(err);
        this.toastr.error("Erreur dans votre inscription. Veuillez réessayer");
      }
    );
  }

 /* register() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;       
    }
    // display form values on success
    this.registerForm.reset();
    this.getStudentsDetails();
    this.toastr.success("Votre inscription est bien enregistré");
}*/

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
}
export function MustMatch(controlName: string, matchingControlName: string) {
  return (group: AbstractControl) => {
      const control = group.get(controlName)?.value;
      const matchingControl = group.get(matchingControlName)?.value;

      if (!control || !matchingControl) {
          return null;
      }

      // return if another validator has already found an error on the matchingControl
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          return null;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
      return null;
  }
}



