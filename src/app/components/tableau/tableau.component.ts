import { Component } from '@angular/core';
import { StudentService } from '../../StudentService.service';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { Student } from 'src/app/student';

@Component({
  selector: 'app-tableau' ,
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css'],
  providers:[StudentService]
})
export class TableauComponent {
  title = 'studentdashboard';
   searchText:any
  alert: boolean = false;
  students: Student[] = [];
  registerF !: FormGroup;
  updateF!: FormGroup;
  studentDetails = null as any;
  studentToUpdate = {
    nom :"",
    prenom :"",
    num :"",
    email :"",
    motdepasse :"",
    cfmotpasse :"",
  }
 
  constructor(private studentService: StudentService , private toastr:ToastrService,private formBuilder:FormBuilder) {
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

    this.updateF = this.formBuilder.group({
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
          this.toastr.success("Ajouter avec succés");
        },
        (err) => {
          console.log(err);
          this.toastr.error("Erreur d'ajout");
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


  deleteStudent() {
    this.studentService.deleteStudent(this.studentDetails.num).subscribe(
      (resp) => {
        console.log(resp);
        this.getStudentsDetails();
        this.toastr.success("Effacé avec succés");
      },
      (err) => {
        console.log(err);
        this.toastr.error("Erreur de suppression");
      }
    );
  }

  edit(student: any){
    this.studentToUpdate = student;
  }
  supp(student:any){
    this.studentDetails=student;
  }

  updateStudent(){
    this.studentService.updateStudents(this.studentToUpdate).subscribe(
      (resp) => {
        console.log(resp);
        this.toastr.success("Modification effectuée avec succés");
      },
      (err) => {
        console.log(err);
        this.toastr.error("Erreur lors de modification");
        
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
export function validateNumApogee(control: FormControl): { [key: string]: any } | null {
  const value = control.value;
  const validPattern = /^\d{8}$/; // Vérifie si la valeur contient exactement 6 chiffres

  if (value && !validPattern.test(value)) {
    return { 'huitDigits': true }; // Retourne une erreur si la validation échoue
  }

  return null; // La validation a réussi
} 


