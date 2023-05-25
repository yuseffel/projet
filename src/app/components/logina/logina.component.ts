import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/AdminService';
import { Admin } from 'src/app/admin';

@Component({
  selector: 'app-logina',
  templateUrl: './logina.component.html',
  styleUrls: ['./logina.component.css']
})
export class LoginaComponent {
  admin: Admin = new Admin();

  constructor(private adminService :AdminService, private toastr:ToastrService,private router:Router){
  }

  ngOnInit(): void {  
  }

  loginAdmin(){
    console.log(this.admin);
    this.adminService.loginAdminFromRemote(this.admin).subscribe(
      (resp) => {
        console.log(resp);
        this.toastr.success("Connectée avec succés");
        this.router.navigate(['/espacea'])
      },
      (err) => {
        console.log(err);
        this.toastr.error("Erreur dans votre connexion. Veuillez réessayer");
      }
    );
  }

}
