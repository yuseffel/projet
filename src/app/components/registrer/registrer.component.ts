import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Student } from 'src/app/student';
import { StudentService } from 'src/app/StudentService.service';

export function validateNumApogee(control: FormControl): { [key: string]: any } | null {
  const value = control.value;
  const validPattern = /^\d{8}$/; // Vérifie si la valeur contient exactement 6 chiffres

  if (value && !validPattern.test(value)) {
    return { 'huitDigits': true }; // Retourne une erreur si la validation échoue
  }

  return null; // La validation a réussi
}

@Component({
  selector: 'app-registrer',
  templateUrl: './registrer.component.html',
  styleUrls: ['./registrer.component.css']
})
export class RegistrerComponent {
  title = 'studentdashboard';
  alert: boolean = false;
  students: Student[] = [];
  registerF!: FormGroup;
  studentDetails: any = null;
  studentToUpdate = {
    nom: "",
    prenom: "",
    num: "",
    email: "",
    motdepasse: "",
    cfmotpasse: "",
  }

  constructor(private studentService: StudentService, private toastr: ToastrService, private formBuilder: FormBuilder) {
    this.getStudentsDetails();
  }

  ngOnInit() {
    this.registerF = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      num: ['', Validators.compose([Validators.required, validateNumApogee])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      motdepasse: ['', Validators.required],
      cfmotpasse: ['', Validators.required],
    },{ validator: this.passwordMatchValidator() })
  }

  register() {
    if (this.registerF.valid) {
      this.studentService.registerStudent(this.registerF.value).subscribe(
        (resp) => {
          console.log(resp);
          this.registerF.reset();
          this.getStudentsDetails();
          this.alert = true;
          this.toastr.success("Inscription réaliser avec succés");
        },
        (err) => {
          console.log(err);
          this.toastr.error("Erreur dans votre inscription .Verifiez-vous les informations entrer ")
        }
      );
    }
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

 
  passwordMatchValidator(): any {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.get('motdepasse');
      const confirmPasswordControl = formGroup.get('cfmotpasse');
  
      if (passwordControl && confirmPasswordControl) {
        const passwordValue = passwordControl.value;
        const confirmPasswordValue = confirmPasswordControl.value;
  
        if (passwordValue !== confirmPasswordValue) {
          confirmPasswordControl.setErrors({ passwordMismatch: true });
        } else {
          confirmPasswordControl.setErrors(null);
        }
      }
    };
  }
}
