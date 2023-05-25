import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ProfService } from 'src/app/ProfService.service';

@Component({
  selector: 'app-tableau-p',
  templateUrl: './tableau-p.component.html',
  styleUrls: ['./tableau-p.component.css']
})
export class TableauPComponent {
  title = 'profdashboard';

  profDetails = null as any;
  profToUpdate = {
    nom :"",
    prenom :"",
    mat :"",
    email :"",
    motdepasse :"",
  }
 

  constructor(private profService: ProfService , private toastr:ToastrService , dialog:MatDialog) {
    this.getProfDetails();
  }

  registerProf(registerForm: NgForm) {
    this.profService.registerProf(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        this.getProfDetails();
        this.toastr.success("Votre inscription est bien enregistré");
      },
      (err) => {
        console.log(err);
        this.toastr.error("Erreur dans votre inscription. Veuillez réessayer");
      }
    );
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


  deleteProf(prof: any) {
    this.profService.deleteProf(prof.mat).subscribe(
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
