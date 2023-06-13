import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'app-tableau-conta',
  templateUrl: './tableau-conta.component.html',
  styleUrls: ['./tableau-conta.component.css']
})
export class TableauContaComponent {

  searchText:any;
  contactDetails = null as any;
  constructor(private contactService: ContactService , private toastr:ToastrService) {
    this.getContactDetails();
  }
  getContactDetails() {
    this.contactService.getContact().subscribe(
      (resp) => {
        console.log(resp);
        this.contactDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  supp(contact:any){
  this.contactDetails=contact;
  }

  deleteContact() {
    this.contactService.deleteContact(this.contactDetails.id).subscribe(
      (resp) => {
        console.log(resp);
        this.getContactDetails();
        this.toastr.success("Effacé avec succés");
      },
      (err) => {
        console.log(err);
        this.toastr.error("Erreur de suppression");
      }
    );
  }

}
