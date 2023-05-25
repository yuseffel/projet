import { Component } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { Router } from '@angular/router';
import { Prof } from 'src/app/prof';
import { ProfService } from 'src/app/ProfService.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-loginp',
  templateUrl: './loginp.component.html',
  styleUrls: ['./loginp.component.css']
})
export class LoginpComponent {
  prof: Prof = new Prof();

  constructor(private profService :ProfService, private toastr:ToastrService,private router:Router){
  }

  ngOnInit(): void {  
  }

  loginProf(){
    console.log(this.prof);
    this.profService.loginStudentFromRemote(this.prof).subscribe(
      (resp) => {
        console.log(resp);
        this.toastr.success("Connectée avec succés");
        this.router.navigate(['/c1filieres'])
      },
      (err) => {
        console.log(err);
        this.toastr.error("Erreur dans votre connexion. Veuillez réessayer");
      }
    );
  }
}

