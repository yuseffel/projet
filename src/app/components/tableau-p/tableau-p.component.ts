import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ProfService } from 'src/app/ProfService.service';

@Component({
  selector: 'app-tableau-p',
  templateUrl: './tableau-p.component.html',
  styleUrls: ['./tableau-p.component.css']
})
export class TableauPComponent {
   searchText:any;
  title = 'profdashboard';
  alert: boolean = false;
  registerF!: FormGroup;
  updateF!:FormGroup;
  profDetails = null as any;
  profToUpdate = {
    nom :"",
    prenom :"",
    mat :"",
    email :"",
    motdepasse :"",
  }
 

  constructor(private profService: ProfService , private toastr:ToastrService ,private dialog:MatDialog,private formBuilder: FormBuilder ){
    this.getProfDetails();
  }
  ngOnInit() {
    this.registerF = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      motdepasse: ['', Validators.required],
      })

      this.updateF = this.formBuilder.group({
        nom: ['', Validators.required],
        prenom: ['', Validators.required],
        email: ['', Validators.compose([Validators.required, Validators.email])],
        motdepasse: ['', Validators.required],
        })
  }

  registerProf() {
    if (this.registerF.valid) {
      this.profService.registerProf(this.registerF.value).subscribe(
        (resp) => {
          console.log(resp);
          this.registerF.reset();
          this.getProfDetails();
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

  getProfDetails() {
    this.profService.getProf().subscribe(
      (resp) => {
        console.log(resp);
        this.profDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteProf() {
    this.profService.deleteProf(this.profDetails.mat).subscribe(
      (resp) => {
        console.log(resp);
        this.getProfDetails();
        this.toastr.success("Effacé avec succés");
      },
      (err) => {
        console.log(err);
        this.toastr.error("Erreur de suppression");
      }
    );
  }
  
  edit(prof: any){
    this.profToUpdate = prof;
  }
  supp(prof:any){
    this.profDetails=prof;
  }

  updateProf(){
    this.profService.updateProf(this.profToUpdate).subscribe(
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

}
